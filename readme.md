# table

**don't use this, use [AsciiTable](https://www.npmjs.com/package/ascii-table) instead**

# download

just download the `index.js` file from github

# use

```js
const Table = require("./index.js")

let table = new Table("Commands")
table.header("command", "category", "status")
table.row("create.js", "fun", "on")
table.row("clearchannels.js", "fun", "off")

console.log(table.toString())
```
