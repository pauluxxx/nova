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

import { NgFor } from "@angular/common";
import { Component, Inject, TemplateRef, ViewChild } from "@angular/core";

import {
    DialogService,
    NuiDialogRef,
    ToastService,
    WizardComponent,
} from "@nova-ui/bits";

import { NuiButtonModule } from "../../../../../../src/lib/button/button.module";
import { NuiCheckboxModule } from "../../../../../../src/lib/checkbox/checkbox.module";
import { NuiDialogModule } from "../../../../../../src/lib/dialog/dialog.module";
import { NuiWizardModule } from "../../../../../../src/lib/wizard/wizard.module";

@Component({
    selector: "nui-wizard-dialog-example",
    templateUrl: "./wizard-dialog.example.component.html",
    imports: [NuiCheckboxModule, NgFor, NuiDialogModule, NuiWizardModule, NuiButtonModule],
})
export class WizardDialogExampleComponent {
    @ViewChild("wizardComponent") wizardComponent: WizardComponent;

    public activeDialog: NuiDialogRef;

    constructor(
        @Inject(DialogService) private dialogService: DialogService,
        @Inject(ToastService) private toastService: ToastService
    ) {}

    public vegetables = [
        $localize`Cabbage`,
        $localize`Potato`,
        $localize`Tomato`,
        $localize`Carrot`,
    ];
    public selectedVegetables = [$localize`Potato`, $localize`Tomato`];

    public isChecked(vegetable: string): boolean {
        return this.selectedVegetables.indexOf(vegetable) > -1;
    }

    public valuesChanged(values: any[]): void {
        this.selectedVegetables = [...values];
    }

    public openDialog(content: TemplateRef<string>): void {
        this.activeDialog = this.dialogService.open(content, { size: "lg" });
    }

    public closeDialog(): void {
        this.activeDialog.close();
    }
}
