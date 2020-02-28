# Web components

This lib contains some basic web components like buttons, inputs etc.

It exports all components into dv4wc module. In addition there is export per component eg. dv4btn for button.

## Usage

```javascript
import "@dv4all/components";
// TODO: DEMONSTRATE API
```

## Rollup setup

Made partially by [this video](https://www.youtube.com/watch?v=K1RE9FspKxw)

## Importing ESM modules directly

It seems that I need to import esm module directly. Why is that? If I just specify lib it seems to be importing umd files which do not work properly?!?

### Example direct ESM module import

```javascript
// needs to directly point to esm module?!?
import { newCustomElement } from "@dv4all/wcp-utils/lib/dv4wcp.utils.esm";
// THIS WILL NOT WORK!?!?
import { newCustomElement } from "@dv4all/wcp-utils";
```
