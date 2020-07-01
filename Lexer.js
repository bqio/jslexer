module.exports = class Lexer {
  constructor(code, keywords = [], separators = [], operators = []) {
    this.code = code;
    this.keywords = keywords;
    this.separators = separators;
    this.operators = operators;
    this.tokens = [];
    this.stack = [];
    this.EOF = this.code.length;
  }

  next(char) {
    if (char.charCodeAt() == 32) {
      this.push();
      this.clear();
    } else if (this.separators.includes(char)) {
      this.push();
      this.clear();
      this.stack.push(char);
      this.push();
      this.clear();
    } else {
      this.stack.push(char);
    }
  }

  processAll() {
    for (let i = 0; i < this.EOF; i++) {
      this.next(this.code[i]);
    }
    this.push();
    this.clear();
  }

  parseType(expr) {
    if (this.keywords.includes(expr)) {
      return "KEYWORD";
    }

    if (this.separators.includes(expr)) {
      return "SEPARATOR";
    }

    if (this.operators.includes(expr)) {
      return "OPERATOR";
    }

    if (parseInt(expr)) {
      return "CONST";
    }

    return "ID";
  }

  push() {
    if (this.stack.length != 0) {
      let token = this.stack.join("");
      let type = this.parseType(token);
      if (type == "CONST") token = parseInt(token);
      this.tokens.push([token, type]);
    }
  }

  clear() {
    this.stack = [];
  }
};
