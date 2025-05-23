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

import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { BreadcrumbItem, BreadcrumbStateService } from "@nova-ui/bits";

@Component({
    selector: "nui-breadcrumb-basic-example",
    templateUrl: "./breadcrumb-basic.example.component.html",
    standalone: false,
})
export class BreadcrumbBasicExampleComponent implements OnInit, OnDestroy {
    public breadcrumbSource: Array<BreadcrumbItem>;
    private routerSubscription: Subscription;

    constructor(
        private router: Router,
        private routerState: ActivatedRoute,
        private breadcrumbStateService: BreadcrumbStateService
    ) {}

    public ngOnInit(): void {
        this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(
            this.routerState,
            "/breadcrumb/"
        );
        this.routerSubscription = this.breadcrumbStateService
            .getNavigationSubscription(this.router)
            .subscribe(
                () =>
                    (this.breadcrumbSource =
                        this.breadcrumbStateService.getBreadcrumbState(
                            this.routerState,
                            "/breadcrumb/"
                        ))
            );
    }

    public onNavigation(routerState: string): void {
        void this.router.navigate([routerState]);
    }

    public relativeNavigation(routerState: string): void {
        void this.router.navigate([routerState], {
            relativeTo: this.routerState,
        });
    }

    public ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }
}

@Component({
    selector: "nui-breadcrumb-first-subview",
    template: ` <div class="container">
        <div i18n class="nui-text-default">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio, cumque nihil impedit,
            quo minus id, quod maxime placeat, facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut
            et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
        </div>
        <button
            id="nui-demo-breadcrumb-show-first-country"
            nui-button
            type="button"
            (click)="relativeNavigation('usa')"
            i18n
        >
            USA
        </button>
        <button
            id="nui-demo-breadcrumb-show-second-country"
            class="ml-1"
            nui-button
            type="button"
            (click)="relativeNavigation('ukraine')"
            i18n
        >
            Ukraine
        </button>
        <router-outlet></router-outlet>
    </div>`,
    standalone: false,
})
export class BreadcrumbCountriesSubviewComponent {
    constructor(private router: Router, private routerState: ActivatedRoute) {}

    public relativeNavigation(routerState: string): void {
        this.router.navigate([routerState], { relativeTo: this.routerState });
    }
}

@Component({
    selector: "nui-breadcrumb-second-subview",
    template: ` <div>
        <p i18n class="nui-text-default">Some data about country here</p>
    </div>`,
    standalone: false,
})
export class BreadcrumbSingleCountryComponent {}

@Component({
    selector: "nui-breadcrumb-offices-subview",
    template: ` <div>
        <p i18n class="nui-text-default">Some data about offices here</p>
    </div>`,
    standalone: false,
})
export class BreadcrumbOfficesSubviewComponent {}
