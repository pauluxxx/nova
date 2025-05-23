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

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {
    ChangeDetectorRef,
    Component,
    Injectable,
    OnDestroy,
    OnInit,
} from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";

import { DataSourceService, IFilteringOutputs } from "@nova-ui/bits";
import {
    DATA_SOURCE,
    DEFAULT_KPI_BACKGROUND_COLORS,
    IDashboard,
    IKpiColorRules,
    IKpiData,
    IProviderConfiguration,
    IWidget,
    IWidgets,
    KpiComponent,
    NOVA_KPI_COLOR_PRIORITIZER,
    NOVA_KPI_DATASOURCE_ADAPTER,
    PizzagnaLayer,
    ProviderRegistryService,
    WellKnownPathKey,
    WellKnownProviders,
    WidgetTypesService,
} from "@nova-ui/dashboards";

/**
 * A simple KPI data source to retrieve the average rating of Harry Potter and the Sorcerer's Stone (book) via googleapis
 */
@Injectable()
export class AverageRatingKpiDataSource
    extends DataSourceService<IKpiData>
    implements OnDestroy
{
    public static providerId = "AverageRatingKpiDataSource";
    public busy = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {
        super();
    }

    public async getFilteredData(): Promise<IFilteringOutputs> {
        this.busy.next(true);
        return new Promise((resolve) => {
            // *** Make a resource request to an external API (if needed)
            this.http
                .get("https://www.googleapis.com/books/v1/volumes/5MQFrgEACAAJ")
                .pipe(finalize(() => this.busy.next(false)))
                .subscribe({
                    next: (data: any) => {
                        resolve({
                            result: {
                                value: data.volumeInfo.averageRating,
                                // setting the color on the dataSource "Sea Green",
                                // uncomment to get the background color update from the "Data" layer
                                // backgroundColor: "var(--nui-color-chart-three)",
                            },
                        });
                    },
                    error: (error: HttpErrorResponse) => {
                        resolve({
                            result: null,
                            error: {
                                type: error.status,
                            },
                        });
                    },
                });
        });
    }

    public ngOnDestroy(): void {
        this.outputsSubject.complete();
    }
}

/**
 * A component that instantiates the dashboard
 */
@Component({
    selector: "kpi-widget-background-color-example",
    templateUrl: "./kpi-widget-background-color-example.component.html",
    styleUrls: ["./kpi-widget-background-color-example.component.less"],
    standalone: false,
})
export class KpiWidgetBackgroundColorExampleComponent implements OnInit {
    public dashboard: IDashboard | undefined;
    public gridsterConfig: GridsterConfig = {};
    public editMode: boolean = false;

    constructor(
        private widgetTypesService: WidgetTypesService,
        private providerRegistry: ProviderRegistryService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.setupDashboard();

        // KPI tile default color setup
        this.setupDefaultColorStructure();

        // Sets the custom pallette to the 'Description' section
        this.setupCustomPalletteDescription();

        // Sets the custom pallette to the 'Background color rules' section
        this.setupCustomPalletteRules();

        this.initializeDashboard();
    }

    /** Used for restoring widgets state */
    public reInitializeDashboard(): void {
        // destroys the components and their providers so the dashboard can re init data
        this.dashboard = undefined;
        this.changeDetectorRef.detectChanges();

        this.initializeDashboard();
    }

    private setupCustomPalletteDescription() {
        const kpiWidgetTemplate = this.widgetTypesService.getWidgetType(
            "kpi",
            1
        );
        this.widgetTypesService.setNode(
            kpiWidgetTemplate,
            "configurator",
            WellKnownPathKey.TileDescriptionBackgroundColors,
            [
                { color: "var(--nui-color-chart-one)", label: "Blue" },
                {
                    color: "var(--nui-color-chart-one-light)",
                    label: "Blue Light",
                },
                {
                    color: "var(--nui-color-chart-one-dark)",
                    label: "Blue Dark",
                },
            ]
        );
    }

    private setupCustomPalletteRules() {
        const kpiWidgetTemplate = this.widgetTypesService.getWidgetType(
            "kpi",
            1
        );
        this.widgetTypesService.setNode(
            kpiWidgetTemplate,
            "configurator",
            WellKnownPathKey.TileBackgroundColorRulesBackgroundColors,
            [
                { color: "red", label: "Native Red" },
                ...DEFAULT_KPI_BACKGROUND_COLORS,
            ]
        );
    }

    private setupDefaultColorStructure() {
        const widgetTemplate = this.widgetTypesService.getWidgetType("kpi", 1);
        this.widgetTypesService.setNode(
            widgetTemplate,
            "widget",
            "tiles.properties.template.properties.widgetData.backgroundColor",
            "red"
        );
    }

    private setupDashboard() {
        const widgetTemplate = this.widgetTypesService.getWidgetType("kpi", 1);
        this.widgetTypesService.setNode(
            widgetTemplate,
            "configurator",
            WellKnownPathKey.DataSourceProviders,
            [AverageRatingKpiDataSource.providerId]
        );

        this.providerRegistry.setProviders({
            [AverageRatingKpiDataSource.providerId]: {
                provide: DATA_SOURCE,
                useClass: AverageRatingKpiDataSource,
                deps: [HttpClient],
            },
        });
    }

    private initializeDashboard(): void {
        const kpiWidget = widgetConfig;
        const widgetIndex: IWidgets = {
            [kpiWidget.id]:
                this.widgetTypesService.mergeWithWidgetType(kpiWidget),
        };

        const positions: Record<string, GridsterItem> = {
            [kpiWidget.id]: {
                cols: 4,
                rows: 6,
                y: 0,
                x: 0,
            },
        };

        this.dashboard = {
            positions,
            widgets: widgetIndex,
        };
    }
}

const widgetConfig: IWidget = {
    id: "kpiWidgetId",
    type: "kpi",
    pizzagna: {
        [PizzagnaLayer.Configuration]: {
            header: {
                properties: {
                    title: "Harry Potter and the Sorcerer's Stone",
                    subtitle: "By J. K. Rowling",
                },
            },
            tiles: {
                properties: {
                    nodes: ["kpi1"],
                },
            },
            kpi1: {
                id: "kpi1",
                componentType: KpiComponent.lateLoadKey,
                properties: {
                    widgetData: {
                        units: `out of 5 Stars`,
                        label: `Average Rating`,
                        // Configuration color "Blue"
                        backgroundColor: "var(--nui-color-chart-one)",
                    },
                },
                providers: {
                    [WellKnownProviders.DataSource]: {
                        providerId: AverageRatingKpiDataSource.providerId,
                    } as IProviderConfiguration,
                    [WellKnownProviders.Adapter]: {
                        providerId: NOVA_KPI_DATASOURCE_ADAPTER,
                        properties: {
                            componentId: "kpi1",
                            propertyPath: "widgetData",
                        },
                    } as IProviderConfiguration,
                    [WellKnownProviders.KpiColorPrioritizer]: {
                        providerId: NOVA_KPI_COLOR_PRIORITIZER,
                        properties: {
                            // Color Prioritizer Rules
                            // settings rules - if the value is more than "2" display "Violet" color
                            rules: [
                                {
                                    comparisonType: ">",
                                    value: 2,
                                    color: "var(--nui-color-chart-four)",
                                },
                            ] as IKpiColorRules[],
                        },
                    } as IProviderConfiguration,
                },
            },
        },
    },
};
