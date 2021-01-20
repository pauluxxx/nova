# Definition of Done
* Component styles conform and behavior to the [Nova Design System](https://ux.solarwinds.io/design/). Note - we may not implement all behavior outlined in component mockups, but all behavior implemented must conform to the specs.
* Any necessary externally facing technical documentation created/updated
  * For components and libraries. API docs pages are created and complete with the following tabs:
    * Overview - this tab provides explanations of a component and its behavior along with examples for each feature/option.
    * API - the whole API surface of a component/entity is documented. For components, this includes all inputs and outputs. For services and other exported classes, this includes all public members and methods.
* Peer code review completed
* Source code has been merged to main branch
* Resulting main branch build is successful
* For components and library features:
  * At least 2 user sessions completed where the feedback has been incorporated
  * SDLC component status is set on docs Example page
* Cross-cutting concerns are addressed and tested
  * Ensure all strings are internationalized (note - translations are not provided by Nova UI)
  * Performance
  * Ensure component/entity supports a11y
    * keyboard navigation is supported
    * [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
  * Security (where applicable)
* New behavior has been manually tested and verified
* Changes tested in all [supported browsers](./docs/FAQ.md#what-browsers-are-supported-by-nova-ui)
* Automation tests (visual / unit / e2e / atoms) have been created and are passing
  * Strongly favor unit tests over e2e/visual
  * Business logic (e.g. controllers, services, filters, etc) should be unit tested - goal for coverage is at least 80%.
  * Integration tests (i.e. tests for how components interact with one another) should be done e2e.
  * Minimize e2e - avoid e2e tests for those things that can be unit or visually tested
  * Visual and e2e tests satisfy the code owners. The PR is a good spot for this.
  * Atom(s) should be written for each component
* Any defects for critical functionality are fixed. Some examples of critical functionality:
  * Anything that prevents a feature developer from employing a component/lib
  * Anything that prevents an end-user from accomplishing their job