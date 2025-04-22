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

import { OverlayConfig } from "@angular/cdk/overlay";
import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { OVERLAY_WITH_POPUP_STYLES_CLASS } from "@nova-ui/bits";

import { NuiSelectV2Module } from "../../../../../../src/lib/select-v2/select-v2.module";

@Component({
    selector: "nui-combobox-v2-overlay-config-example",
    templateUrl: "./combobox-v2-overlay-config.example.component.html",
    host: { class: "combobox-container" },
    imports: [NuiSelectV2Module, FormsModule, ReactiveFormsModule, NgFor],
})
export class ComboboxV2OverlayConfigExampleComponent {
    public items = Array.from({ length: 100 }).map(
        (_, i) => $localize`Item ${i}`
    );

    public overlayConfig: OverlayConfig = {
        width: 300,
        height: 200,
        panelClass: [
            OVERLAY_WITH_POPUP_STYLES_CLASS,
            "overlay-config-demo-custom-class",
        ],
    };

    public comboboxControl = new FormControl<string | null>(null);
}
