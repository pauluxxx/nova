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

import { Component } from "@angular/core";

import { NuiDocsModule } from "../../../../../../../src/lib/docs/docs.module";
import { BadgeColorBlackComponent } from "../badge-color-black/badge-color-black.component";
import { BadgeCounterBasicComponent } from "../badge-counter-basic/badge-counter-basic.component";
import { BadgeCustomizationComponent } from "../badge-customization/badge-customization.component";
import { BadgeEmptyBasicComponent } from "../badge-empty-basic/badge-empty-basic.component";
import { BadgeNovauiComponent } from "../badge-novaui/badge-novaui.component";
import { BadgeSystemStatusesComponent } from "../badge-system-statuses/badge-system-statuses.component";

@Component({
    selector: "nui-badge-docs",
    templateUrl: "./badge-docs.component.html",
    styleUrls: ["./badge-docs.component.less"],
    imports: [NuiDocsModule, BadgeCounterBasicComponent, BadgeEmptyBasicComponent, BadgeSystemStatusesComponent, BadgeColorBlackComponent, BadgeCustomizationComponent, BadgeNovauiComponent],
})
export class BadgeDocsComponent {}
