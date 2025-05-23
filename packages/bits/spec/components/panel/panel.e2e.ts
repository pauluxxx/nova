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

import { browser } from "protractor";
import { ISize } from "selenium-webdriver";

import { Atom } from "../../atom";
import { ResizerAtom } from "../../directives/public_api";
import { Helpers } from "../../helpers";
import { PanelAtom } from "../public_api";

describe("USERCONTROL Panel", () => {
    beforeAll(async () => {
        await Helpers.prepareBrowser(`panel/panel-test`);
    });

    describe("Collapsible", () => {
        const panelCollapsible = Atom.find(
            PanelAtom,
            "nui-demo-collapsible-panel"
        );

        it("Should toggle panel css class upon icon click ", async () => {
            await panelCollapsible.waitElementVisible();
            await browser.wait(
                async () => await panelCollapsible.isCollapsed(),
                1000
            );

            expect(await panelCollapsible.isExpanded()).toBe(
                false,
                "initial state of panel to be collapsed"
            );
            expect(await panelCollapsible.isCollapsed()).toBe(
                true,
                "initial state of panel to be collapsed"
            );

            await panelCollapsible.toggleExpanded();

            expect(await panelCollapsible.isCollapsed()).toBe(
                false,
                "check if panel is expanded upon click"
            );
            expect(await panelCollapsible.isExpanded()).toBe(
                true,
                "check if panel is expanded upon click"
            );

            await panelCollapsible.toggleExpanded();

            expect(await panelCollapsible.isCollapsed()).toBe(
                true,
                "check if panel is collapsed upon second click"
            );
            expect(await panelCollapsible.isExpanded()).toBe(
                false,
                "check if panel is collapsed upon second click"
            );
        });
    });

    describe("Hidden", () => {
        const panelHidden = Atom.find(PanelAtom, "nui-demo-hidden-panel");

        it("should hide/unhide the left pane when hideLeftPane is toggled", async () => {
            await panelHidden.waitElementVisible();
            expect(await panelHidden.isPaneDisplayed("left")).toEqual(true);
            await panelHidden.closeSidePane();
            expect(await panelHidden.isPaneDisplayed("left")).toEqual(false);
        });
    });

    describe("Floating", () => {
        const panelFloating = Atom.find(PanelAtom, "nui-demo-floating-panel");

        it("should not change width of center pane while displaying floating panel", async () => {
            await panelFloating.waitElementVisible();
            const oldCenterPaneSize: ISize =
                await panelFloating.getCenterPaneElementSize();
            await panelFloating.hoverOnSidePane();
            const newCenterPaneSize: ISize =
                await panelFloating.getCenterPaneElementSize();
            expect(oldCenterPaneSize.width).toEqual(newCenterPaneSize.width);
        });
    });

    describe("Resize", () => {
        const panelResize = Atom.find(PanelAtom, "nui-demo-resizable-panel");
        const gutter = Atom.find(ResizerAtom, "nui-demo-resizable-panel");
        beforeEach(async () => {
            await panelResize.waitElementVisible();
            await gutter.waitElementVisible();
        });

        it("should make side panel bigger", async () => {
            const origWinSize = await browser.manage().window().getSize();
            const gutterMoveDistance = 300;
            browser.driver.manage().window().setSize(900, 890);
            const oldCenterPaneSize =
                await panelResize.getCenterPaneElementSize();
            await gutter.moveRight(gutterMoveDistance);
            const newCenterPaneSize =
                await panelResize.getCenterPaneElementSize();
            await expect(oldCenterPaneSize.width).toEqual(
                newCenterPaneSize.width + gutterMoveDistance
            );
            // Return to initial state
            await gutter.moveLeft(gutterMoveDistance);
            await browser
                .manage()
                .window()
                .setSize(origWinSize.width, origWinSize.height);
        });

        it("should make side panel smaller", async () => {
            const origWinSize = await browser.manage().window().getSize();
            const gutterMoveDistance = 20;
            browser.driver.manage().window().setSize(1200, 880);
            const oldCenterPaneSize =
                await panelResize.getCenterPaneElementSize();
            await gutter.moveLeft(gutterMoveDistance);
            const newCenterPaneSize =
                await panelResize.getCenterPaneElementSize();
            await expect(oldCenterPaneSize.width).toEqual(
                newCenterPaneSize.width - gutterMoveDistance
            );
            // Return to initial state
            await gutter.moveRight(gutterMoveDistance);
            await browser
                .manage()
                .window()
                .setSize(origWinSize.width, origWinSize.height);
        });

        it("should not resize when panel is collapsed", async () => {
            const gutterMoveDistance = 300;
            await panelResize.toggleExpanded();
            await expect(await panelResize.isCollapsed()).toBe(true);

            await panelResize.toggleExpanded();
            await expect(await panelResize.isCollapsed()).toBe(false);
            const oldExpandedCenterPaneSize =
                await panelResize.getCenterPaneElementSize();
            await gutter.moveRight(gutterMoveDistance);

            const newExpandedCenterPaneSize =
                await panelResize.getCenterPaneElementSize();
            await expect(oldExpandedCenterPaneSize.width).toBeGreaterThan(
                newExpandedCenterPaneSize.width
            );

            // Return to initial state
            await gutter.moveLeft(gutterMoveDistance);
        });

        it("should correctly resize panel when it's size was set in percents and window size was changed", async () => {
            const origWinSize = await browser.manage().window().getSize();

            try {
                await browser.manage().window().setSize(600, 880);

                const oldSidePaneSize =
                    await panelResize.getSidePaneElementSize();
                await gutter.moveRight(200);
                const newSidePaneSize =
                    await panelResize.getSidePaneElementSize();
                await expect(newSidePaneSize.width).toBeGreaterThan(
                    oldSidePaneSize.width
                );

                await browser.manage().window().setSize(1200, 880);
                const oldSidePaneSizeResized =
                    await panelResize.getSidePaneElementSize();
                await gutter.moveLeft(200);
                const newSidePaneSizeResized =
                    await panelResize.getSidePaneElementSize();
                await expect(oldSidePaneSizeResized.width).toBeGreaterThan(
                    newSidePaneSizeResized.width
                );
            } finally {
                // Restoring the initial window size
                await browser
                    .manage()
                    .window()
                    .setSize(origWinSize.width, origWinSize.height);
            }
        });
    });
});
