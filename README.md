# jslexer

Simple JS Lexer.

### Example

```js
const Lexer = require("./Lexer");

const CODE = "var x,y, z; a=2; b = 15;";
const KEYWORDS = ["var"];
const SEPARATORS = [",", ";"];
const OPERATORS = ["="];

const lexer = new Lexer(CODE, KEYWORDS, SEPARATORS, OPERATORS);

lexer.processAll();

console.log(lexer.tokens);
```

### Output

```js
[
  ["var", "KEYWORD"],
  ["x", "ID"],
  [",", "SEPARATOR"],
  ["y", "ID"],
  [",", "SEPARATOR"],
  ["z", "ID"],
  [";", "SEPARATOR"],
  ["a", "ID"],
  ["=", "OPERATOR"],
  [2, "CONST"],
  [";", "SEPARATOR"],
  ["b", "ID"],
  ["=", "OPERATOR"],
  [15, "CONST"],
  [";", "SEPARATOR"],
];
```
