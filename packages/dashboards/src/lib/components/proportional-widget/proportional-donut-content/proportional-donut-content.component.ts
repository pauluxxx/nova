// © 2022 SolarWinds Worldwide, LLC. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to
//  deal in the Software without restriction, including without limitation the
//  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
//  sell copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
} from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { LoggerService } from "@nova-ui/bits";
import {
    ChartAssist,
    IAccessors,
    IChartAssistEvent,
    IChartAssistSeries,
} from "@nova-ui/charts";

import { mapDataToFormatterProperties } from "../../../functions/map-data-to-formatter-properties";
import {
    IProportionalDonutContentAggregator,
    IProportionalDonutContentAggregatorDefinition,
    IProportionalDonutContentAggregatorProperties,
} from "../../../functions/proportional-aggregators/types";
import { ProportionalContentAggregatorsRegistryService } from "../../../services/proportional-content-aggregators-registry.service";
import { ProportionalDonutContentFormattersRegistryService } from "../../../services/public-api";
import { IHasChangeDetector } from "../../../types";
import {
    IFormatter,
    IFormatterDefinition,
    IFormatterProperties,
} from "../../types";
import { IDonutContentConfig } from "../types";

@Component({
    selector: "nui-proportional-donut-content",
    templateUrl: "./proportional-donut-content.component.html",
    styleUrls: ["./proportional-donut-content.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false,
})
export class ProportionalDonutContentComponent
    implements OnChanges, OnDestroy, IHasChangeDetector
{
    static lateLoadKey = "ProportionalDonutContentComponent";

    @Input() public widgetData: IChartAssistSeries<IAccessors>[];
    @Input() public donutConfig: IDonutContentConfig;

    @Input() private chartAssist: ChartAssist;

    public aggregatedValue: string;
    public contentFormatter: IFormatter;
    public contentFormatterProperties: IFormatterProperties | undefined;

    private contentFormatterDefinition: IFormatterDefinition;
    private contentAggregatorDefinition: IProportionalDonutContentAggregatorDefinition;
    /** Hovered series Id */
    private emphasizedSeriesId: string;
    private destroy$ = new Subject<void>();
    private chartAssistSubscription: Subscription;

    constructor(
        private aggregatorRegistry: ProportionalContentAggregatorsRegistryService,
        private formatterRegistry: ProportionalDonutContentFormattersRegistryService,
        public changeDetector: ChangeDetectorRef,
        private logger: LoggerService
    ) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.donutConfig) {
            const donutConfig: IDonutContentConfig =
                changes.donutConfig.currentValue;

            const { formatter, aggregator } = donutConfig;
            if (aggregator?.aggregatorType) {
                this.updateAggregatorDefinition(aggregator);
                this.updateAggregatedValue();
            }

            if (formatter?.componentType) {
                this.contentFormatter = formatter;
                this.updateFormatterDefinition(formatter);
                this.updateFormatterProperties();
            }
        }

        if (changes.widgetData) {
            this.updateAggregatedValue();
            this.updateFormatterProperties();
        }

        if (changes.chartAssist) {
            this.subscribeToChartAssist();
        }
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    /**
     * Iterates over formatters and maps their properties from the data
     *
     * @param formattersConfiguration
     */
    private getFormatterProperties(formatter: IFormatter | undefined) {
        if (!formatter) {
            return undefined;
        }

        return {
            ...this.contentFormatterDefinition?.properties,
            data: mapDataToFormatterProperties(formatter, {
                // add "aggregatedValue" as "value" so that formatter processes it by default
                value: this.aggregatedValue,
            }),
        };
    }

    private updateAggregatorDefinition(
        aggregatorConfig: IProportionalDonutContentAggregator
    ) {
        const fromRegistry = this.aggregatorRegistry.getItem(
            aggregatorConfig.aggregatorType
        );

        if (fromRegistry) {
            this.contentAggregatorDefinition = fromRegistry;
        } else {
            this.logger.warn(
                `No aggregator with key ${aggregatorConfig.aggregatorType} found in registry.`
            );
        }
    }

    private updateFormatterDefinition(formatterConfig: IFormatter) {
        const fromRegistry = this.formatterRegistry.getItem(
            formatterConfig.componentType
        );

        if (fromRegistry) {
            this.contentFormatterDefinition = fromRegistry;
        } else {
            this.logger.warn(
                `No aggregator with key ${formatterConfig.componentType} found in registry.`
            );
        }
    }

    private updateAggregatedValue(): void {
        if (!this.widgetData || !this.contentAggregatorDefinition) {
            this.logger.warn(
                `Can't aggregate value. Aggregator key: ${this.contentAggregatorDefinition?.aggregatorType}. Data: ${this.widgetData}`
            );
            return;
        }

        const properties = this.getAggregatorProperties();

        this.aggregatedValue = this.contentAggregatorDefinition
            .fn(this.widgetData, {
                ...properties,
                // prioritize emphasizedSeriesId if series is hovered on the chart
                activeMetricId:
                    this.emphasizedSeriesId || properties.activeMetricId,
            })
            .toString();
    }

    private updateFormatterProperties() {
        this.contentFormatterProperties = this.getFormatterProperties(
            this.contentFormatter
        );
    }

    private getAggregatorProperties(): IProportionalDonutContentAggregatorProperties {
        return {
            ...this.contentAggregatorDefinition?.properties,
            ...this.donutConfig?.aggregator?.properties,
        };
    }

    private subscribeToChartAssist() {
        this.chartAssistSubscription?.unsubscribe();
        this.chartAssistSubscription = this.chartAssist?.chartAssistSubject
            ?.pipe(takeUntil(this.destroy$))
            .subscribe((data: IChartAssistEvent) => {
                this.emphasizedSeriesId = data.payload?.seriesId;
                this.updateAggregatedValue();
                this.updateFormatterProperties();
                this.changeDetector.detectChanges();
            });
    }
}
