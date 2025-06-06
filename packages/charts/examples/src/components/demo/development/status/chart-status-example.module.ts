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

import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NuiIconModule } from "@nova-ui/bits";
import { NuiChartsModule } from "@nova-ui/charts";

import { ChartStatusTestComponent } from "./status-test/chart-status-test.component";
import { ChartWaterfallSimpleComponent } from "./waterfall-simple/chart-waterfall-simple.component";
import { ChartWaterfallTestComponent } from "./waterfall-test/chart-waterfall-test.component";
import { DemoCommonModule } from "../../common/demo-common.module";

const collectionRoutes: Routes = [
    {
        path: "",
        component: ChartStatusTestComponent,
    },
    {
        path: "waterfall",
        component: ChartWaterfallTestComponent,
    },
    {
        path: "waterfall-simple",
        component: ChartWaterfallSimpleComponent,
    },
];

@NgModule({
    declarations: [
        ChartStatusTestComponent,
        ChartWaterfallSimpleComponent,
        ChartWaterfallTestComponent,
    ],
    imports: [
        DragDropModule,
        NuiIconModule,
        DemoCommonModule,
        NuiChartsModule,
        RouterModule.forChild(collectionRoutes),
    ],
})
export default class ChartStatusExampleModule {}
