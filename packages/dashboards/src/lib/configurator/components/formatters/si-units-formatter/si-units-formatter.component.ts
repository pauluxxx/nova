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
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnChanges,
    SimpleChanges,
} from "@angular/core";
import toNumber from "lodash/toNumber";
import toString from "lodash/toString";

import {
    ISiUnitsPrefix,
    SI_UNITS_PREFIXES,
    SI_UNITS_PREFIXES_NEGATIVE,
} from "../../../../constants/si-units-prefixes";
import { IFormatterData } from "../types";

@Component({
    selector: "nui-dashboards-si-units-formatter",
    template: `
        <ng-container>
            <div class="d-flex flex-nowrap">
                <span>{{ value }}</span>
                <span> {{ modifier }}</span>
            </div>
        </ng-container>
    `,
    standalone: false,
})
export class SiUnitsFormatterComponent implements OnChanges {
    static lateLoadKey = "SiUnitsFormatterComponent";
    // e.g. setting "shiftPoint" to "1" makes "1000k" to be displayed instead of "1M"
    static SHIFT_POINT_DEFAULT = 0;

    @Input() public data: IFormatterData;

    @Input()
    @HostBinding("class")
    public elementClass: string;

    public value: string = "0";
    public modifier: string | undefined;

    constructor(public changeDetector: ChangeDetectorRef) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            const { value } = changes.data.currentValue;

            if (value) {
                this.processSiUnitsValue(toString(value));
            }
        }
    }

    protected processSiUnitsValue(value: string): void {
        const prefix = this.getTransformPrefix(toNumber(value));

        this.value = this.getTransformedValue(value, prefix);
        this.modifier = prefix?.prefix;
    }

    protected getTransformedValue(
        value: string,
        prefix: ISiUnitsPrefix | undefined
    ): string {
        if (!prefix) {
            return value;
        }

        const transformed =
            prefix.power !== 1 ? +value * Math.pow(10, -prefix.power) : +value;
        const rounded = Math.round(transformed * 10) / 10; // round to 1 decimal

        return rounded.toString();
    }

    protected getTransformPrefix(origin: number): ISiUnitsPrefix | undefined {
        const value = Math.abs(origin);

        if (Number.isNaN(value)) {
            return undefined;
        }

        const shiftPoint =
            this.data?.shiftPoint ||
            SiUnitsFormatterComponent.SHIFT_POINT_DEFAULT;

        if (value >= 1) {
            const rounded = Math.round(value);
            const roundedStr = rounded.toString();
            const roundedLength = roundedStr.length;

            // iterate over prefixes from higher to lower
            const prefix = [...SI_UNITS_PREFIXES]
                .reverse()
                .find((pref) => roundedLength >= pref.power + 1 + shiftPoint);
            return prefix;
        } else {
            const modifier = getValueNegativeModifier(value);
            const prefix = [...SI_UNITS_PREFIXES_NEGATIVE]
                .reverse()
                .find(
                    (pref) => modifier <= Math.abs(pref.power) + 1 + shiftPoint
                );
            return prefix;
        }
    }
}

function getValueNegativeModifier(
    value: number,
    prevModifier: number = 1
): number {
    const val = Math.abs(value);

    if (val >= 1) {
        return 1;
    }

    const newModifier = prevModifier + 1;

    return val * Math.pow(10, newModifier) > 1
        ? newModifier
        : getValueNegativeModifier(val, newModifier);
}
