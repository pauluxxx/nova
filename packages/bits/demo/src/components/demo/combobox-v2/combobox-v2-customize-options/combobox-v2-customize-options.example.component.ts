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
import { FormControl } from "@angular/forms";

interface IExampleItem {
    id: string;
    name: string;
    icon: string;
}

@Component({
    selector: "nui-combobox-v2-customize-options-example",
    templateUrl: "combobox-v2-customize-options.example.component.html",
    host: { class: "combobox-container" },
    standalone: false,
})
export class ComboboxV2CustomizeOptionsExampleComponent {
    public icons: any[] = ["check", "email", "execute"];
    public items: IExampleItem[] = Array.from({ length: 100 }).map((_, i) => ({
        id: `value-${i}`,
        name: $localize`Item ${i}`,
        icon: this.getRandomIcon(),
    }));

    public comboboxControl = new FormControl<string | null>(null);

    public displayFn(item: IExampleItem): string {
        return item?.name || "";
    }

    private getRandomIcon() {
        return this.icons[Math.round(Math.random() * 2)];
    }
}
