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

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import {
    NuiCommonModule,
    NuiFormFieldModule,
    NuiTextboxModule,
} from "@nova-ui/bits";
import { NuiChartsModule } from "@nova-ui/charts";

import { DonutGaugePrototypeComponent } from "./donut/donut-gauge-prototype.component";
import { GaugeTestPageComponent } from "./gauge-test-page.component";
import { LinearGaugeHorizontalPrototypeComponent } from "./horizontal/linear-gauge-horizontal-prototype.component";
import { LinearGaugeVerticalPrototypeComponent } from "./vertical/linear-gauge-vertical-prototype.component";
import { DemoCommonModule } from "../../common/demo-common.module";

const routes: Routes = [
    {
        path: "",
        component: GaugeTestPageComponent,
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
];

@NgModule({
    declarations: [
        LinearGaugeHorizontalPrototypeComponent,
        LinearGaugeVerticalPrototypeComponent,
        DonutGaugePrototypeComponent,
        GaugeTestPageComponent,
    ],
    imports: [
        NuiCommonModule,
        NuiFormFieldModule,
        NuiTextboxModule,
        DemoCommonModule,
        NuiChartsModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export default class GaugePrototypesModule {}
