module.exports = {
    ignorePatterns: ["projects/**/*", "node_modules/**/*"],
    overrides: [
        {
            extends: [
                "plugin:@angular-eslint/recommended",
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:@angular-eslint/template/process-inline-templates",
            ],
            files: ["*.ts"],
            plugins: ["prefer-arrow", "@stylistic/ts"],
            rules: {
                // TODO: Remove errors in v12 in scope of NUI-6044
                "@angular-eslint/component-selector": [
                    "off",
                    {
                        prefix: "nui",
                        style: "kebab-case",
                        type: "element",
                    },
                ],
                "@angular-eslint/contextual-lifecycle": "off",
                "@angular-eslint/directive-class-suffix": "error",
                // TODO: Remove errors in v12 in scope of NUI-6044
                "@angular-eslint/directive-selector": [
                    "off",
                    {
                        prefix: "nui",
                        style: "camelCase",
                        type: "attribute",
                    },
                ],
                "@angular-eslint/no-conflicting-lifecycle": "off",
                /******************************
                 * Angular-specific rules
                 *******************************/
                "@angular-eslint/no-empty-lifecycle-method": "off",
                "@angular-eslint/no-host-metadata-property": "off",
                // todo migrate all components to standalone
                "@angular-eslint/prefer-standalone": "off",
                // todo breaking change to clients output native
                "@angular-eslint/no-output-native": "off",
                /******************************
                 * Typescript-specific rules
                 *******************************/
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/explicit-module-boundary-types": [
                    "warn",
                    {
                        allowArgumentsExplicitlyTypedAsAny: true,
                        allowTypedFunctionExpressions: false,
                    },
                ],
                // "semi": "off",
                "@stylistic/ts/semi": ["error"],
                "@stylistic/ts/member-delimiter-style": [
                    "error",
                    {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: false,
                        },
                    },
                ],
                "@stylistic/ts/type-annotation-spacing": "error",
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        default: [
                            "static-field",
                            "static-method",
                            "instance-field",
                            "instance-method",
                        ],
                    },
                ],
                // Substitutes the 'class-name' tslint rule.
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        format: ["camelCase", "UPPER_CASE", "PascalCase"],
                        leadingUnderscore: "allow",
                        selector: "variable",
                    },
                ],
                "@typescript-eslint/no-empty-function": [
                    "error",
                    {
                        allow: [
                            "private-constructors",
                            "protected-constructors",
                            "decoratedFunctions",
                            "methods",
                            "constructors",
                            "functions",
                            "arrowFunctions",
                            "asyncFunctions",
                            "asyncMethods",
                        ],
                    },
                ],
                "@typescript-eslint/no-empty-interface": [
                    "error",
                    {
                        allowSingleExtends: true,
                    },
                ],
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-floating-promises": "off",
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-loss-of-precision": ["warn"],
                "@typescript-eslint/no-misused-promises": "off",
                "@typescript-eslint/no-this-alias": "off",
                // TODO: fix lint errors
                "@typescript-eslint/no-type-alias": [
                    "off",
                    {
                        allowAliases: "always",
                        allowCallbacks: "always",
                        allowConditionalTypes: "always",
                        allowConstructors: "always",
                        allowGenerics: "always",
                        allowLiterals: "in-intersections",
                        allowMappedTypes: "always",
                        allowTupleTypes: "always",
                    },
                ],
                "@typescript-eslint/no-unnecessary-type-assertion": "off",
                // TODO: fix lint errors
                "@typescript-eslint/no-unsafe-argument": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/prefer-promise-reject-errors": "off",
                "@typescript-eslint/no-unused-expressions": [
                    "error",
                    {
                        allowTernary: true,
                    },
                ],
                "@typescript-eslint/no-unused-vars": [
                    "warn",
                    {
                        args: "none",
                        ignoreRestSiblings: true,
                    },
                ],
                "@typescript-eslint/no-var-requires": "off",
                // Substitutes the 'callable-types' tslint rule
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/promise-function-async": "warn",
                "@typescript-eslint/require-await": "off",
                "@typescript-eslint/restrict-plus-operands": "off",
                "@typescript-eslint/restrict-template-expressions": "off",
                "@typescript-eslint/triple-slash-reference": "off",
                "@typescript-eslint/unbound-method": "off",
                "@typescript-eslint/unified-signatures": "error",
                // strict rules afte ng 17 update
                "@typescript-eslint/no-redundant-type-constituents": "off",
                "@typescript-eslint/no-base-to-string": "off",
                "@typescript-eslint/no-unsafe-enum-comparison": "off",
                "@typescript-eslint/no-unsafe-function-type": "warn",
                /******************************
                 * ESLint rules
                 *******************************/
                // Substitutes the 'arrow-return-shorthand' tslint rule
                "arrow-body-style": ["error", "as-needed"],
                "brace-style": ["off"],
                "comma-dangle": [
                    "error",
                    {
                        arrays: "always-multiline",
                        exports: "always-multiline",
                        functions: "never",
                        imports: "always-multiline",
                        objects: "always-multiline",
                    },
                ],
                "curly": "error",
                "eol-last": "error",
                "eqeqeq": ["error", "smart"],
                "guard-for-in": "error",
                "id-denylist": [
                    "error",
                    "any",
                    "string",
                    "boolean",
                    "undefined",
                ],
                "id-match": "error",
                "import/export": "off",
                // Substitutes the 'deprecation' tslint rule
                "import/no-deprecated": "warn",
                "import/no-duplicates": "off",
                "import/no-named-as-default": "off",
                "import/no-named-as-default-member": "off",
                "import/order": [
                    "warn",
                    {
                        "alphabetize": {
                            order: "asc",
                        },
                        "groups": [
                            "builtin",
                            "external",
                            "internal",
                            ["parent", "sibling", "index"],
                        ],
                        "newlines-between": "always",
                        "pathGroups": [
                            {
                                group: "internal",
                                pattern: "@nova-ui/**",
                                position: "before",
                            },
                        ],
                        "pathGroupsExcludedImportTypes": ["builtin"],
                    },
                ],
                "indent": ["off"],
                "max-len": [
                    "off",
                    {
                        code: 160,
                    },
                ],
                "no-bitwise": "error",
                "no-caller": "error",
                "no-case-declarations": "error",
                "no-console": [
                    "error",
                    {
                        allow: [
                            "log",
                            "warn",
                            "dir",
                            "timeLog",
                            "assert",
                            "clear",
                            "count",
                            "countReset",
                            "group",
                            "groupEnd",
                            "table",
                            "dirxml",
                            "error",
                            "groupCollapsed",
                            "Console",
                            "profile",
                            "profileEnd",
                            "timeStamp",
                            "context",
                        ],
                    },
                ],
                "no-empty": [
                    "error",
                    {
                        allowEmptyCatch: true,
                    },
                ],
                // Must disable the base rule as it can report incorrect errors
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
                "no-empty-function": "off",
                "no-eval": "error",
                "no-fallthrough": "error",
                // TODO Fix in future
                "no-loss-of-precision": "off",
                "no-new-wrappers": "error",
                "no-prototype-builtins": "off",
                "no-redeclare": "error",
                "no-restricted-imports": [
                    "error",
                    {
                        paths: ["lodash", "moment"],
                    },
                ],
                "no-shadow": [
                    "off",
                    {
                        hoist: "all",
                    },
                ],
                "no-throw-literal": "error",
                "no-trailing-spaces": [
                    "error",
                    {
                        skipBlankLines: true,
                    },
                ],
                "no-undef-init": "error",
                "no-underscore-dangle": "off",
                // TODO fix in future
                "no-unsafe-assignment": "off",
                // Must disable the base rule as it can report incorrect errors
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
                "no-unused-expressions": "off",
                // Must disable the base rule as it can report incorrect errors
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
                // TODO: resolve all the warnings for the following rule in the scope of NUI-5900
                "no-unused-vars": "off",
                "no-useless-escape": "off",
                "no-var": "error",
                "prefer-arrow/prefer-arrow-functions": [
                    "warn",
                    {
                        allowStandaloneDeclarations: true,
                        singleReturnOnly: true,
                    },
                ],
                "prefer-const": [
                    "warn",
                    {
                        ignoreReadBeforeAssign: true,
                    },
                ],
                "quotes": [
                    "error",
                    "double",
                    {
                        allowTemplateLiterals: true,
                    },
                ],
                "radix": "error",
                "require-await": "off",
                "sort-imports": "off",
                // Substitutes the 'comment-format' tslint rule
                "spaced-comment": [
                    "error",
                    "always",
                    {
                        block: {
                            balanced: true,
                            exceptions: ["*"],
                            markers: ["/"],
                        },
                        line: {
                            markers: ["/"],
                        },
                    },
                ],
            },
        },
        {
            extends: ["plugin:@angular-eslint/template/recommended"],
            files: ["*.html"],
            rules: {
                "@angular-eslint/template/no-negated-async": "error",
            },
        },
    ],
    root: true,
};
