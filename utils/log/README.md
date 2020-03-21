# @dv4all/log

**`THIS LIBRARY IS USED BY OTHER WEB COMPONENT MODULES.`**

Console log utility function. Later it might be extended with other logging options?

## Usage

### consoleLog

Console log feature with group and ENV support. The logs are printed to console ONLY when ENV='development'.

You can use Rollup replace plugin to load ENV value based on development | production state. Look at the @dv4all/components for rollup config which uses ENV variable to pass propper environment value to consoleLog.

```javascript
import { consoleLog } from "@dv4all/log";

consoleLog("log message", ENV);
```

**This module is part of monorepo [dv4all-wcp](https://github.com/dmijatovic/dv4all-wcp).**
