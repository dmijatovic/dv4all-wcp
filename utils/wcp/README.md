# @dv4all/wcp-utils

**`THIS LIBRARY IS USED BY OTHER @dv4all WEB COMPONENT MODULES.`**

This is web component utility module. It is used by other modules to create new customElements.

## Usage

```javascript
import { newCustomElement } from "@dv4all/wcp-utils";
//html template

const html = `
  <style>
    :host{
      display:block;
    }
  </style>
  <h1>Test custom component</h1>
`;

//props
const props = {
  observedAttr: ["role"],
  shadowMode: "open",
  renderHtml: htmlButton
};

//create new custom element
const NewCustomElement = newCustomElement(props);

//register custom element
customElements.define("dv4-new-custom-element", NewCustomElement);

//export for custom element defining
//Note! element will always be defined but you can create
//additional definition. This is not advised but it possible.
export default NewCustomElement;
```

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**
