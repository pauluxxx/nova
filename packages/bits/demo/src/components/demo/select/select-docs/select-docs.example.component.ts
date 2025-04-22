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

import { NuiDocsModule } from "../../../../../../src/lib/docs/docs.module";
import { SelectBasicExampleComponent } from "../select-basic/select-basic.example.component";
import { SelectCustomTemplateExampleComponent } from "../select-custom-template/select-custom-template.example.component";
import { SelectDisabledExampleComponent } from "../select-disabled/select-disabled.example.component";
import { SelectInlineExampleComponent } from "../select-inline/select-inline.example.component";
import { SelectJustifiedExampleComponent } from "../select-justified/select-justified.example.component";
import { SelectReactiveFormExampleComponent } from "../select-reactive-form/select-reactive-form.example.component";
import { SelectRemoveValueExampleComponent } from "../select-remove-value/select-remove-value.example.component";
import { SelectRequiredExampleComponent } from "../select-required/select-required.example.component";
import { SelectSeparatorsExampleComponent } from "../select-separators/select-separators.example.component";

@Component({
    selector: "nui-select-docs-example",
    templateUrl: "./select-docs.example.component.html",
    imports: [NuiDocsModule, SelectBasicExampleComponent, SelectDisabledExampleComponent, SelectRequiredExampleComponent, SelectInlineExampleComponent, SelectSeparatorsExampleComponent, SelectJustifiedExampleComponent, SelectCustomTemplateExampleComponent, SelectReactiveFormExampleComponent, SelectRemoveValueExampleComponent],
})
export class SelectDocsComponent {}
