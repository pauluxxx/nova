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
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from "@angular/core";
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import _difference from "lodash/difference";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { EventBus, IDataField, IDataSource, IEvent } from "@nova-ui/bits";

import {
    IHasChangeDetector,
    IHasForm,
    PIZZAGNA_EVENT_BUS,
} from "../../../../../types";
import { DATA_SOURCE_CREATED } from "../../../../types";

@Component({
    selector: "nui-grouping-configuration",
    templateUrl: "./grouping-configuration.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            .grouping-configuration__accordion-content {
                padding: 15px 15px 15px 46px;
            }
        `,
    ],
    standalone: false,
})
// Remember to declare this class in the parent module
export class GroupingConfigurationComponent
    implements OnInit, OnChanges, IHasChangeDetector, IHasForm, OnDestroy
{
    public static lateLoadKey = "DrilldownConfiguratorComponent";

    @Input() groups: string[];
    @Input() groupBy: string[];
    @Output() formReady = new EventEmitter<FormGroup>();

    public form: FormGroup = this.formBuilder.group({
        groups: [],
        groupBy: this.formBuilder.array([]),
        drillstate: [undefined],
    });

    public selectData: Array<Array<string>>;

    private readonly destroy$ = new Subject<void>();

    constructor(
        public changeDetector: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        @Inject(PIZZAGNA_EVENT_BUS) private eventBus: EventBus<IEvent>
    ) {}

    public get getGroupByControl(): FormArray {
        return this.form.get("groupBy") as FormArray;
    }

    public get getDrillStateControl(): FormArray {
        return this.form.get("drillstate") as FormArray;
    }

    public get getGroupsControl(): FormControl {
        return this.form.get("groups") as FormControl;
    }

    public ngOnInit(): void {
        this.eventBus
            .getStream(DATA_SOURCE_CREATED)
            .pipe(takeUntil(this.destroy$))
            .subscribe((provider: IEvent<IDataSource>) =>
                this.onDataSourceCreated(provider)
            );

        this.getGroupByControl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.fillGroupsOptions());

        this.fillGroupsOptions();

        this.formReady.emit(this.form);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.groups) {
            this.getGroupsControl.setValue(changes.groups.currentValue);
        }
        if (changes.groupBy && !changes.groupBy.firstChange) {
            this.getGroupByControl.clear();
            this.groupBy.forEach((group) =>
                this.getGroupByControl.push(this.createControl(group))
            );
            this.fillGroupsOptions();
        }
    }

    public createControl(value?: string): FormControl {
        return this.formBuilder.control(value || "", Validators.required);
    }

    public addGrouping(): void {
        const control = this.createControl();
        this.getGroupByControl.push(control);
        this.fillGroupsOptions();
        const lastControlIndex = this.getGroupByControl.controls.length - 1;
        control.setValue(this.selectData[lastControlIndex][0]);
    }

    public removeRule(index: number): void {
        this.getGroupByControl.removeAt(index);
        this.fillGroupsOptions();
    }

    public isAddRestricted(): boolean {
        return this.selectData.some((i) => i.length === 1);
    }

    public getSubtitle(): string {
        const subtitle = this.getGroupByControl.controls
            .map(
                (control: AbstractControl, index: number) =>
                    `${index === 0 ? "By" : "then"} ${control.value}`
            )
            .join(", ");

        return this.getGroupByControl?.value.length === 0
            ? $localize`No groups`
            : $localize`${subtitle}`;
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private onDataSourceCreated(provider: IEvent<IDataSource>) {
        provider?.payload?.dataFieldsConfig?.dataFields$
            ?.pipe(takeUntil(this.destroy$))
            .subscribe((dataFields: IDataField[]) => {
                if (dataFields) {
                    const dataFieldIds = dataFields.map(
                        (field: IDataField) => field.id
                    );
                    const dataDiff = _difference(this.groups, dataFieldIds);
                    if (dataDiff.length || !this.groups?.length) {
                        this.groups = dataFieldIds;
                        this.getGroupsControl.setValue(dataFieldIds);
                        this.getGroupByControl.clear();
                        this.getDrillStateControl.setValue([]);
                        this.fillGroupsOptions();
                    }
                }
            });
    }

    private fillGroupsOptions() {
        this.selectData = [];
        const controlValue = this.getGroupByControl.value as string[];
        this.getGroupByControl.controls.forEach(
            (value: AbstractControl, index: number) => {
                this.selectData[index] = [];
                const diff = _difference(this.groups, controlValue);
                if (controlValue[index]) {
                    this.selectData[index].push(controlValue[index]);
                }
                this.selectData[index] = [...this.selectData[index], ...diff];
            }
        );
    }
}
