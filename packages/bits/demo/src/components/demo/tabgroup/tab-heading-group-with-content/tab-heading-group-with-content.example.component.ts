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

import { ChangeDetectorRef, Component, Input } from "@angular/core";

@Component({
    selector: "nui-tab-heading-group-with-content-example",
    templateUrl: "./tab-heading-group-with-content.example.component.html",
    styleUrls: ["./tab-heading-group-with-content.example.component.less"],
    standalone: false,
})
export class TabHeadingGroupWithContentExampleComponent {
    @Input() public icon: boolean = false;

    public currentTabId: string;

    public tabsetContent = [
        {
            id: "1",
            title: $localize`Tab with really long content`,
            icon: {
                name: "gear",
                disabledColor: "disabled-gray",
                inactiveColor: "gray",
                activeColor: "black",
            },
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu.",
            isDisabled: false,
        },
        {
            id: "2",
            title: $localize`Tab 2`,
            icon: {
                name: "check",
                disabledColor: "disabled-gray",
                inactiveColor: "gray",
                activeColor: "black",
            },
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed erat eget
                     velit elementum ultricies vitae vel mauris. Nam egestas fermentum ex id interdum.
                     In in dignissim libero. Suspendisse commodo pellentesque purus, sit amet tempor enim
                     viverra at. Nam cursus sed lectus imperdiet imperdiet. Pellentesque vel tincidunt dolor.
                     Aliquam bibendum ac lectus id consectetur. Sed eget purus id dolor ultricies rhoncus.
                     Vivamus ac magna nulla. Nam vel pellentesque ex. Nunc eu metus euismod, dignissim lorem id,
                     pulvinar tellus. Vestibulum sed nisi quis sapien varius vehicula. Proin dictum eu mauris quis aliquet.
                     Vestibulum accumsan eros ac mollis hendrerit. Aenean aliquet sem eros, sit amet ornare tellus tincidunt vitae.`,
            isDisabled: false,
        },
        {
            id: "3",
            title: $localize`Tab 3`,
            icon: {
                name: "acknowledge",
                disabledColor: "disabled-gray",
                inactiveColor: "gray",
                activeColor: "black",
            },
            content: "Should not be visible because the tab is disabled",
            isDisabled: true,
        },
        {
            id: "4",
            title: $localize`Tab 4`,
            icon: {
                name: "add",
                disabledColor: "disabled-gray",
                inactiveColor: "gray",
                activeColor: "black",
            },
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu.",
            isDisabled: false,
        },
    ];

    constructor(private changeDetector: ChangeDetectorRef) {}

    public updateContent(tabId: string): void {
        this.currentTabId = tabId;
        this.changeDetector.detectChanges();
    }
}
