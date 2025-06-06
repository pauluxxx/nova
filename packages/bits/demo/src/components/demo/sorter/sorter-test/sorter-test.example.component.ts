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

import { Component, OnInit, ViewChild } from "@angular/core";
import _orderBy from "lodash/orderBy";
import { BehaviorSubject } from "rxjs";

import {
    IMenuItem,
    ISorterChanges,
    SorterComponent,
    SorterDirection,
} from "@nova-ui/bits";

interface IFilm {
    title: string;
    year: string;
    director: string;
}

@Component({
    selector: "nui-sorter-test-example",
    templateUrl: "./sorter-test.example.component.html",
    styleUrls: ["./sorter-test.example.component.less"],
    standalone: false,
})
export class SorterTestExampleComponent implements OnInit {
    private readonly emptyColumns: IMenuItem[] = [
        {
            title: $localize`Empty`,
            value: "",
        },
    ];
    public readonly dataColumns: IMenuItem[] = [
        {
            title: $localize`Title`,
            value: "title",
        },
        {
            title: $localize`Year`,
            value: "year",
        },
        {
            title: $localize`Director`,
            value: "director",
        },
    ];

    public columns: IMenuItem[] = this.dataColumns;

    @ViewChild(SorterComponent)
    private sorter: SorterComponent;

    private readonly showSubject = new BehaviorSubject(true);
    public readonly show$ = this.showSubject.asObservable();
    public sortDirection = SorterDirection.ascending;
    public sortBy = this.columns[0].value;
    public items: IFilm[] = getData();

    public ngOnInit(): void {
        this.sortItems(this.sortBy, this.sortDirection);
    }

    public updateSorterDirection(): void {
        const old = this.sortDirection;
        this.sortDirection =
            old === SorterDirection.ascending
                ? SorterDirection.descending
                : SorterDirection.ascending;
    }

    public onSorterAction(changeEvent: ISorterChanges): void {
        this.sortBy = changeEvent.newValue.sortBy;
        this.sortItems(
            changeEvent.newValue.sortBy,
            changeEvent.newValue.direction
        );
    }

    private async delayPromise(delay: number = 0): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }

    public async resetSorter(): Promise<void> {
        this.showSubject.next(false);
        await this.delayPromise();
        this.columns = this.emptyColumns;
        this.sortBy = "";
        this.showSubject.next(true);
    }

    public updateSorterByProperty(): void {
        this.columns = this.dataColumns;
        this.sortBy = this.dataColumns[1].value;
    }

    public updateSorterByMethod(): void {
        this.columns = this.dataColumns;
        this.sorter.select(this.dataColumns[2]);
    }

    private sortItems(sortBy: string, direction: SorterDirection) {
        this.items = _orderBy(
            this.items,
            [sortBy],
            [
                direction as
                    | SorterDirection.ascending
                    | SorterDirection.descending,
            ]
        ) as IFilm[];
    }
}

function getData(): IFilm[] {
    return [
        { title: "Vertigo", year: "1958", director: "Alfred Hitchcock" },
        { title: "Citizen Kane", year: "1941", director: "Orson Welles" },
        {
            title: "2001: A Space Odyssey",
            year: "1968",
            director: "Stanley Kubrick",
        },
        {
            title: "The Godfather",
            year: "1972",
            director: "Francis Ford Coppola",
        },
        { title: "Mulholland Dr.", year: "2001", director: "David Lynch" },
        { title: "Taxi Driver", year: "1976", director: "Martin Scorsese" },
        { title: "La Dolce Vita", year: "1960", director: "Federico Fellini" },
        {
            title: "The Silence of the Lambs",
            year: "1991",
            director: "Jonathan Demme",
        },
        { title: "The Terminator", year: "1984", director: "James Cameron" },
    ];
}
