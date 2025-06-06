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

/* eslint-disable max-len */
import { DEFAULT_TABLE_FORMATTERS } from "./default-table-formatters";
import { FormStackComponent } from "../../configurator/components/form-stack/form-stack.component";
import { WidgetConfiguratorSectionComponent } from "../../configurator/components/widget-configurator-section/widget-configurator-section.component";
import { DataSourceConfigurationComponent } from "../../configurator/components/widgets/configurator-items/data-source-configuration/data-source-configuration.component";
import { TableDataSourceErrorComponent } from "../../configurator/components/widgets/configurator-items/data-source-error/table/table-data-source-error.component";
import { TitleAndDescriptionConfigurationComponent } from "../../configurator/components/widgets/configurator-items/title-and-description-configuration/title-and-description-configuration.component";
import { TableColumnsConfigurationV2Component } from "../../configurator/components/widgets/table/columns-editor-v2/table-columns-configuration-v2.component";
import { TableFiltersEditorComponent } from "../../configurator/components/widgets/table/filters-editor/table-filters-editor.component";
import { TableScrollTypeEditorComponent } from "../../configurator/components/widgets/table/scrollType-editor/scroll-type-editor.component";
import {
    DEFAULT_PIZZAGNA_ROOT,
    NOVA_CONFIGURATOR_DATA_SOURCE_MANAGER,
    NOVA_GENERIC_CONVERTER,
    NOVA_TABLE_COLUMNS_CONVERTER,
    NOVA_TABLE_FILTERS_CONVERTER,
    NOVA_TABLE_FORMATTERS_REGISTRY,
    NOVA_TABLE_SCROLL_TYPE_CONVERTER,
    NOVA_TITLE_AND_DESCRIPTION_CONVERTER,
} from "../../services/types";
import { IPizzagna, PizzagnaLayer, WellKnownProviders } from "../../types";
import { REFRESHER_CONFIGURATOR } from "../common/configurator/components";

/* eslint-enable max-len */

export const tableConfigurator: IPizzagna = {
    [PizzagnaLayer.Structure]: {
        [DEFAULT_PIZZAGNA_ROOT]: {
            // base layout of the configurator - all form components referenced herein will be stacked in a column
            id: DEFAULT_PIZZAGNA_ROOT,
            componentType: FormStackComponent.lateLoadKey,
            properties: {
                elementClass: "flex-grow-1 overflow-auto nui-scroll-shadows",
                // references to other components laid out in this form
                nodes: ["presentation", "dataAndCalculations", "columns"],
            },
            providers: {
                [WellKnownProviders.FormattersRegistry]: {
                    providerId: NOVA_TABLE_FORMATTERS_REGISTRY,
                },
                [WellKnownProviders.DataSourceManager]: {
                    providerId: NOVA_CONFIGURATOR_DATA_SOURCE_MANAGER,
                },
            },
        },
        // /presentation
        presentation: {
            id: "presentation",
            componentType: WidgetConfiguratorSectionComponent.lateLoadKey,
            properties: {
                headerText: $localize`Presentation`,
                // references to other components laid out in this form
                nodes: ["titleAndDescription", "filters", "scrollType"],
            },
        },
        // /presentation/titleAndDescription
        titleAndDescription: {
            id: "titleAndDescription",
            componentType:
                TitleAndDescriptionConfigurationComponent.lateLoadKey,
            providers: {
                [WellKnownProviders.Converter]: {
                    providerId: NOVA_TITLE_AND_DESCRIPTION_CONVERTER,
                },
            },
        },
        // /presentation/filters - !WARNING! configuration of built-in sorting, naming is obsolete
        filters: {
            id: "filters",
            componentType: TableFiltersEditorComponent.lateLoadKey,
            providers: {
                [WellKnownProviders.Converter]: {
                    providerId: NOVA_TABLE_FILTERS_CONVERTER,
                },
            },
        },
        // /presentation/scrollType - configuration of built-in pagination
        scrollType: {
            id: "scrollType",
            componentType: TableScrollTypeEditorComponent.lateLoadKey,
            providers: {
                [WellKnownProviders.Converter]: {
                    providerId: NOVA_TABLE_SCROLL_TYPE_CONVERTER,
                },
            },
        },
        refresher: REFRESHER_CONFIGURATOR,
        // /dataAndCalculations
        dataAndCalculations: {
            id: "dataAndCalculations",
            componentType: WidgetConfiguratorSectionComponent.lateLoadKey,
            properties: {
                headerText: $localize`Data and Calculations`,
                nodes: ["dataSource"],
            },
        },
        // /dataAndCalculations/dataSource
        dataSource: {
            id: "dataSource",
            componentType: DataSourceConfigurationComponent.lateLoadKey,
            properties: {
                dataSourceProviders: [],
                errorComponent: TableDataSourceErrorComponent.lateLoadKey,
            },
            providers: {
                [WellKnownProviders.Converter]: {
                    providerId: NOVA_GENERIC_CONVERTER,
                    properties: {
                        formParts: [
                            {
                                previewPath: "table.providers.dataSource",
                                // TODO: Remove 'properties' key in v10 - NUI-5831
                                keys: ["providerId", "properties"],
                            },
                            {
                                previewPath:
                                    "table.providers.adapter.properties.dataSource",
                                keys: ["properties"],
                            },
                        ],
                    },
                },
            },
        },
        // A very important part of this configuration form is the 'columns' section. It manages the configuration of columns and formatters that are used
        // to display data in this table. Every column has multiple properties associated with it like: label, width, formatter and how to map incoming data
        // into the formatter.
        columns: {
            id: "columns",
            componentType: TableColumnsConfigurationV2Component.lateLoadKey,
            properties: {
                // Deprecated (see TableColumnsConfigurationV2Component.template)
                template: [
                    {},
                    {
                        properties: {
                            formatters: DEFAULT_TABLE_FORMATTERS,
                        },
                    },
                ],
            },
            providers: {
                [WellKnownProviders.Converter]: {
                    // this specialized converter does all the work with building the complex forms for every column of the table and mapping the data back
                    // to the widget configuration that builds the table component from the individual column configurations
                    providerId: NOVA_TABLE_COLUMNS_CONVERTER,
                },
            },
        },
    },
};
