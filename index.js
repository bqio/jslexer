const Lexer = require("./Lexer");

const CODE = "var x, y, z; a = 2; b = 15;";
const KEYWORDS = ["var"];
const SEPARATORS = [",", ";"];
const OPERATORS = ["="];

const lexer = new Lexer(CODE, KEYWORDS, SEPARATORS, OPERATORS);

lexer.processAll();

console.log(lexer.tokens);
