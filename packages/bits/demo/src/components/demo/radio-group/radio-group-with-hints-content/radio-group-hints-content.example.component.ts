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

import { ToastService } from "@nova-ui/bits";

@Component({
    selector: "nui-with-hints-content-radio-group-example",
    templateUrl: "./radio-group-hints-content.example.component.html",
    styles: [
        `
            div[hint] {
                cursor: initial;
            }
            div[hint] > span {
                font-weight: bold;
            }
        `,
    ],
    standalone: false,
})
export class RadioGroupHintsContentExampleComponent {
    public colors = [$localize`Red`, $localize`Green`, $localize`Blue`];
    public selectedColor: string;

    public constructor(private readonly toastService: ToastService) {}

    public showToast(): void {
        this.toastService.info({
            title: $localize`Radio button`,
            message: $localize`This event should not propagate to the radio button`,
        });
    }
}
