import * as vscode from "vscode";
import * as changeCase from "change-case";

enum CharCode {
  C_1 = "1".charCodeAt(0),
  C_2 = "2".charCodeAt(0),
  C_3 = "3".charCodeAt(0),
  C_4 = "4".charCodeAt(0),
  C_5 = "5".charCodeAt(0),
  C_6 = "6".charCodeAt(0),
  C_7 = "7".charCodeAt(0),
  C_8 = "8".charCodeAt(0),
  C_9 = "9".charCodeAt(0),
  C_0 = "0".charCodeAt(0),
  C_STAR = "*".charCodeAt(0),
  C_AMPERSAND = "&".charCodeAt(0),
  C_a = "a".charCodeAt(0),
  C_b = "b".charCodeAt(0),
  C_c = "c".charCodeAt(0),
  C_d = "d".charCodeAt(0),
  C_e = "e".charCodeAt(0),
  C_f = "f".charCodeAt(0),
  C_g = "g".charCodeAt(0),
  C_h = "h".charCodeAt(0),
  C_i = "i".charCodeAt(0),
  C_j = "j".charCodeAt(0),
  C_k = "k".charCodeAt(0),
  C_l = "l".charCodeAt(0),
  C_m = "m".charCodeAt(0),
  C_n = "n".charCodeAt(0),
  C_o = "o".charCodeAt(0),
  C_p = "p".charCodeAt(0),
  C_q = "q".charCodeAt(0),
  C_r = "r".charCodeAt(0),
  C_s = "s".charCodeAt(0),
  C_t = "t".charCodeAt(0),
  C_u = "u".charCodeAt(0),
  C_v = "v".charCodeAt(0),
  C_w = "w".charCodeAt(0),
  C_x = "x".charCodeAt(0),
  C_y = "y".charCodeAt(0),
  C_z = "z".charCodeAt(0),
  C_A = "A".charCodeAt(0),
  C_B = "B".charCodeAt(0),
  C_C = "C".charCodeAt(0),
  C_D = "D".charCodeAt(0),
  C_E = "E".charCodeAt(0),
  C_F = "F".charCodeAt(0),
  C_G = "G".charCodeAt(0),
  C_H = "H".charCodeAt(0),
  C_I = "I".charCodeAt(0),
  C_J = "J".charCodeAt(0),
  C_K = "K".charCodeAt(0),
  C_L = "L".charCodeAt(0),
  C_M = "M".charCodeAt(0),
  C_N = "N".charCodeAt(0),
  C_O = "O".charCodeAt(0),
  C_P = "P".charCodeAt(0),
  C_Q = "Q".charCodeAt(0),
  C_R = "R".charCodeAt(0),
  C_S = "S".charCodeAt(0),
  C_T = "T".charCodeAt(0),
  C_U = "U".charCodeAt(0),
  C_V = "V".charCodeAt(0),
  C_W = "W".charCodeAt(0),
  C_X = "X".charCodeAt(0),
  C_Y = "Y".charCodeAt(0),
  C_Z = "Z".charCodeAt(0),
  C_DOT = ".".charCodeAt(0),
  C_TAB = 9,
  C_PERCENT = "%".charCodeAt(0),
  C_BRACK_OPEN = "[".charCodeAt(0),
  C_BRACK_CLOSE = "]".charCodeAt(0),
  C_SPACE = " ".charCodeAt(0),
  C_EMPTY = 0,
  C_PAREN_OPEN = "(".charCodeAt(0),
  C_COLON = ":".charCodeAt(0),
  C_SEMICOLON = ";".charCodeAt(0),
  C_PAREN_CLOSE = ")".charCodeAt(0),
  C_BRACE_OPEN = "{".charCodeAt(0),
  C_BRACE_CLOSE = "}".charCodeAt(0),
  C_UNDERSCORE = "_".charCodeAt(0),
  C_BAR = "|".charCodeAt(0),
  C_CARRIAGE = "\r".charCodeAt(0),
  C_NEWLINE = "\n".charCodeAt(0),
  C_GT = ">".charCodeAt(0),
  C_LT = "<".charCodeAt(0),
  C_EQ = "=".charCodeAt(0),
  C_MINUS = "-".charCodeAt(0),
  C_PLUS = "+".charCodeAt(0),
  C_SLASH = "/".charCodeAt(0),
  C_HASHTAG = "#".charCodeAt(0),
  C_EXCLAMATION = "!".charCodeAt(0),
  C_BACKTICK = "`".charCodeAt(0),
}

enum CharCodeType {
  word,
  whitespace,
  dot,
  brack_open,
  brack_close,
  space,
  empty,
  paren_open,
  colon,
  semicolon,
  paren_close,
  brace_open,
  brace_close,
  underscore,
  carriage,
  newline,
  gt,
  lt,
  eq,
  exclamation,
  minus,
  plus,
  slash,
  hashtag,
  caret,
}

enum GoToken {
  unknown,
  break,
  default,
  func,
  interface,
  select,
  case,
  defer,
  go,
  map,
  struct,
  chan,
  else,
  goto,
  package,
  switch,
  const,
  fallthrough,
  if,
  range,
  type,
  continue,
  for,
  import,
  return,
  var,
  nil_lit,
  identifier,
  l_paren,
  r_paren,
  l_curly,
  r_curly,
  l_bracket,
  r_bracket,
  assign,
  comma,
  semi,
  colon,
  dot,
  plus_plus,
  minus_minus,
  declare_assign,
  ellipsis,
  logical_or,
  logical_and,
  equals,
  not_equals,
  less,
  less_or_equals,
  greater,
  greater_or_equals,
  or,
  div,
  mod,
  lshift,
  rshift,
  bit_clear,
  exclamation,
  plus,
  minus,
  caret,
  star,
  ampersand,
  receive,
  decimal_lit,
  binary_lit,
  octal_lit,
  hex_lit,
  float_lit,
  decimal_float_lit,
  hex_float_lit,
  imaginary_lit,
  rune_lit,
  byte_value,
  octal_byte_value,
  hex_byte_value,
  little_u_value,
  big_u_value,
  raw_string_lit,
  interpreted_string_lit,
  ws,
  comment,
  terminator,
  line_comment,
  eof,
}

enum GoTokenCategory {
  unknown,
  num,
  keyword,
  identifier,
  operator,
  punctuation,
}

class Token {
  kind: GoToken;
  category: GoTokenCategory;

  start: number;
  stop: number;

  clone() {
    return new Token(this.kind, this.category, this.start, this.stop);
  }

  constructor(
    kind: GoToken,
    category: GoTokenCategory,
    start: number,
    stop: number
  ) {
    this.kind = kind;
    this.category = category;
    this.start = start;
    this.stop = stop;
  }
}

class Scanner {
  constructor(document: vscode.TextDocument, relative: vscode.Range) {
    this.stop = this.start = this.offset = document.offsetAt(relative.start);
    this.max = document.offsetAt(relative.end) + 1;
  }
  document: vscode.TextDocument;
  text: string;
  offset: number;
  start: number;
  stop: number;
  max: number;

  current = new Token(GoToken.unknown, GoTokenCategory.unknown, 0, 0);

  expect(char: string) {
    this.eat();

    if (this.peek() === char) {
      return true;
    }

    return false;
  }

  end() {
    this.stop = Math.min(this.offset, this.max);
    if (this.text[this.stop] === "\n") {
      this.stop--;
    }
  }

  isAtEndOfDocument() {
    return this.max <= this.offset;
  }

  skip() {
    this.eat();

    if (this.isAtEndOfDocument()) {
      return false;
    }

    return true;
  }

  peek() {
    return this.text[this.offset];
  }

  charCode() {
    return this.text.charCodeAt(this.offset);
  }

  nextCharCode() {
    return this.text.charCodeAt(this.offset + 1);
  }

  eat() {
    if (this.isAtEndOfDocument()) {
      return 0;
    }

    this.offset++;
    return this.charCode();
  }

  replace(content: string, token: Token) {
    return (this.text = `${this.text.substring(
      0,
      token.start
    )}${content}${this.text.substring(token.stop + 1)}`);
  }

  string() {
    return this.text.substring(this.start, this.offset);
  }

  lineStart = -1;
  line = 0;

  until(char: CharCode) {
    while (true) {
      switch (this.eat()) {
        case char: {
          return true;
        }

        case CharCode.C_EMPTY: {
          return false;
        }
      }
    }
  }

  until2(char1: CharCode, char2: CharCode) {
    while (true) {
      switch (this.eat()) {
        case char2:
        case char1: {
          return true;
        }

        case CharCode.C_EMPTY: {
          return false;
        }
      }
    }
  }

  beginToken(token: Token) {
    token.start = this.start = this.offset;
    this.lineStart = this.lineStart === -1 ? this.start : this.lineStart;
  }

  closeToken(token: Token) {
    token.stop = this.offset;
  }

  literal(token: Token) {
    return this.text.substring(token.start, token.stop);
  }

  nextToken(token: Token) {
    switch (this.eat()) {
      case CharCode.C_CARRIAGE: {
        this.skip();
        this.line++;
        this.lineStart = -1;
        token.kind = GoToken.terminator;
        this.closeToken(token);
        break;
      }

      case CharCode.C_NEWLINE: {
        this.line++;
        this.lineStart = -1;
        token.kind = GoToken.terminator;
        this.closeToken(token);
        break;
      }

      case CharCode.C_TAB:
      case CharCode.C_SPACE: {
        this.until2(CharCode.C_TAB, CharCode.C_SPACE);
        token.kind = GoToken.ws;
        this.closeToken(token);
        break;
      }

      case CharCode.C_DOT: {
        this.beginToken(token);
        if (this.nextCharCode() === CharCode.C_DOT) {
          this.offset++;
          if (this.nextCharCode() === CharCode.C_DOT) {
            this.offset++;
            token.kind = GoToken.ellipsis;
          } else {
            this.offset--;
            token.kind = GoToken.dot;
          }
        } else {
          token.kind = GoToken.dot;
        }

        this.closeToken(token);
        break;
      }
      case CharCode.C_BRACK_OPEN: {
        this.beginToken(token);
        token.kind = GoToken.l_bracket;
        this.closeToken(token);
      }
      case CharCode.C_BRACK_CLOSE: {
        this.beginToken(token);
        token.kind = GoToken.r_bracket;
        this.closeToken(token);
        break;
      }
      case CharCode.C_EMPTY: {
        token.kind = GoToken.eof;
        this.closeToken(token);
        break;
      }
      case CharCode.C_PAREN_OPEN: {
        this.beginToken(token);
        token.kind = GoToken.l_paren;
        this.closeToken(token);
        break;
      }
      case CharCode.C_COLON: {
        this.beginToken(token);

        if (this.nextCharCode() === CharCode.C_EQ) {
          this.offset++;
          token.kind = GoToken.declare_assign;
        } else {
          token.kind = GoToken.colon;
        }
        this.closeToken(token);
        break;
      }
      case CharCode.C_BACKTICK: {
        this.beginToken(token);
        token.kind = GoToken.rune_lit;
        this.until(CharCode.C_BACKTICK);
        this.closeToken(token);
        break;
      }
      case CharCode.C_SEMICOLON: {
        this.beginToken(token);
        token.kind = GoToken.semi;
        this.closeToken(token);
        break;
      }
      case CharCode.C_PAREN_CLOSE: {
        this.beginToken(token);
        token.kind = GoToken.r_paren;
        this.closeToken(token);
        break;
      }
      case CharCode.C_BRACE_OPEN: {
        this.beginToken(token);
        token.kind = GoToken.l_curly;
        this.closeToken(token);
        break;
      }
      case CharCode.C_BRACE_CLOSE: {
        this.beginToken(token);
        token.kind = GoToken.r_curly;
        this.closeToken(token);
        break;
      }

      case CharCode.C_GT: {
        this.beginToken(token);

        switch (this.nextCharCode()) {
          case CharCode.C_EQ: {
            token.kind = GoToken.greater_or_equals;
            this.offset++;
            break;
          }
          case CharCode.C_GT: {
            token.kind = GoToken.rshift;
            this.offset++;
            break;
          }
          default: {
            token.kind = GoToken.greater;
            break;
          }
        }
        this.closeToken(token);
      }
      case CharCode.C_LT: {
        this.beginToken(token);

        switch (this.nextCharCode()) {
          case CharCode.C_EQ: {
            token.kind = GoToken.less_or_equals;
            this.offset++;
            break;
          }
          case CharCode.C_LT: {
            token.kind = GoToken.lshift;
            this.offset++;
            break;
          }
          case CharCode.C_MINUS: {
            token.kind = GoToken.receive;
            this.offset++;
            break;
          }
          default: {
            token.kind = GoToken.less;
            break;
          }
        }
        this.closeToken(token);
        break;
      }
      case CharCode.C_EQ: {
        this.beginToken(token);

        switch (this.nextCharCode()) {
          case CharCode.C_EQ: {
            token.kind = GoToken.equals;
            this.offset++;
            break;
          }
          default: {
            token.kind = GoToken.assign;
            break;
          }
        }
        this.closeToken(token);
        break;
      }
      case CharCode.C_MINUS: {
        this.beginToken(token);

        switch (this.nextCharCode()) {
          case CharCode.C_MINUS: {
            token.kind = GoToken.minus_minus;
            this.offset++;
            break;
          }
          default: {
            token.kind = GoToken.minus;
            break;
          }
        }
        this.closeToken(token);
        break;
      }

      case CharCode.C_PLUS: {
        this.beginToken(token);

        switch (this.nextCharCode()) {
          case CharCode.C_PLUS: {
            token.kind = GoToken.plus_plus;
            this.offset++;
            break;
          }
          default: {
            token.kind = GoToken.plus;
            break;
          }
        }
        this.closeToken(token);
        break;
      }
      case CharCode.C_SLASH: {
        this.beginToken(token);

        switch (this.nextCharCode()) {
          //
          case CharCode.C_SLASH: {
            this.offset++;
            token.kind = GoToken.line_comment;
            this.until(CharCode.C_NEWLINE);
            this.offset--;
            break;
          }
          // /*
          case CharCode.C_STAR: {
            this.offset++;
            let foundEnd = false;

            do {
              // */
              this.until(CharCode.C_STAR);
              foundEnd = this.eat() === CharCode.C_SLASH;
            } while (!foundEnd);

            token.kind = GoToken.comment;
            break;
          }
          default: {
            token.kind = GoToken.div;
            break;
          }
        }
        this.closeToken(token);
        break;
      }

      case CharCode.C_PERCENT: {
        this.beginToken(token);
        token.kind = GoToken.mod;
        this.closeToken(token);
        break;
      }

      case CharCode.C_BAR: {
        this.beginToken(token);

        if (this.nextCharCode() === CharCode.C_BAR) {
          this.offset++;
          token.kind = GoToken.logical_or;
        } else {
          token.kind = GoToken.or;
        }
        this.closeToken(token);
        break;
      }

      case CharCode.C_AMPERSAND: {
        this.beginToken(token);

        if (this.nextCharCode() === CharCode.C_AMPERSAND) {
          this.offset++;
          token.kind = GoToken.logical_and;
        } else {
          token.kind = GoToken.ampersand;
        }

        this.closeToken(token);
        break;
      }

      case CharCode.C_EXCLAMATION: {
        this.beginToken(token);

        if (this.nextCharCode() === CharCode.C_EQ) {
          this.offset++;
          token.kind = GoToken.not_equals;
        } else {
          token.kind = GoToken.exclamation;
        }

        this.closeToken(token);
        break;
      }
      // case CharCode.C_HASHTAG: {
      //   this.beginToken(token);
      //   break;
      // }

      case CharCode.C_a:
      case CharCode.C_b:
      case CharCode.C_c:
      case CharCode.C_d:
      case CharCode.C_e:
      case CharCode.C_f:
      case CharCode.C_g:
      case CharCode.C_h:
      case CharCode.C_i:
      case CharCode.C_j:
      case CharCode.C_k:
      case CharCode.C_l:
      case CharCode.C_m:
      case CharCode.C_n:
      case CharCode.C_o:
      case CharCode.C_p:
      case CharCode.C_q:
      case CharCode.C_r:
      case CharCode.C_UNDERSCORE:
      case CharCode.C_s:
      case CharCode.C_t:
      case CharCode.C_u:
      case CharCode.C_v:
      case CharCode.C_w:
      case CharCode.C_x:
      case CharCode.C_y:
      case CharCode.C_z:
      case CharCode.C_A:
      case CharCode.C_B:
      case CharCode.C_C:
      case CharCode.C_D:
      case CharCode.C_E:
      case CharCode.C_F:
      case CharCode.C_G:
      case CharCode.C_H:
      case CharCode.C_I:
      case CharCode.C_J:
      case CharCode.C_K:
      case CharCode.C_L:
      case CharCode.C_M:
      case CharCode.C_N:
      case CharCode.C_O:
      case CharCode.C_P:
      case CharCode.C_Q:
      case CharCode.C_R:
      case CharCode.C_S:
      case CharCode.C_T:
      case CharCode.C_U:
      case CharCode.C_V:
      case CharCode.C_W:
      case CharCode.C_X:
      case CharCode.C_Y:
      case CharCode.C_Z: {
        this.start = this.offset;
        let isAlphanumeric = true;
        this.lineStart = this.lineStart === -1 ? this.start : this.lineStart;
        while (isAlphanumeric) {
          switch (this.eat()) {
            case CharCode.C_0:
            case CharCode.C_1:
            case CharCode.C_2:
            case CharCode.C_3:
            case CharCode.C_4:
            case CharCode.C_5:
            case CharCode.C_6:
            case CharCode.C_7:
            case CharCode.C_8:
            case CharCode.C_9:
            case CharCode.C_a:
            case CharCode.C_UNDERSCORE:
            case CharCode.C_b:
            case CharCode.C_c:
            case CharCode.C_d:
            case CharCode.C_e:
            case CharCode.C_f:
            case CharCode.C_g:
            case CharCode.C_h:
            case CharCode.C_i:
            case CharCode.C_j:
            case CharCode.C_k:
            case CharCode.C_l:
            case CharCode.C_m:
            case CharCode.C_n:
            case CharCode.C_o:
            case CharCode.C_p:
            case CharCode.C_q:
            case CharCode.C_r:
            case CharCode.C_s:
            case CharCode.C_t:
            case CharCode.C_u:
            case CharCode.C_v:
            case CharCode.C_w:
            case CharCode.C_x:
            case CharCode.C_y:
            case CharCode.C_z:
            case CharCode.C_A:
            case CharCode.C_B:
            case CharCode.C_C:
            case CharCode.C_D:
            case CharCode.C_E:
            case CharCode.C_F:
            case CharCode.C_G:
            case CharCode.C_H:
            case CharCode.C_I:
            case CharCode.C_J:
            case CharCode.C_K:
            case CharCode.C_L:
            case CharCode.C_M:
            case CharCode.C_N:
            case CharCode.C_O:
            case CharCode.C_P:
            case CharCode.C_Q:
            case CharCode.C_R:
            case CharCode.C_S:
            case CharCode.C_T:
            case CharCode.C_U:
            case CharCode.C_V:
            case CharCode.C_W:
            case CharCode.C_X:
            case CharCode.C_Y:
            case CharCode.C_Z: {
              break;
            }
            default: {
              isAlphanumeric = false;
              break;
            }
          }
        }

        token.stop = this.offset;

        switch (this.literal(token)) {
          case "break": {
            token.kind = GoToken.break;
            break;
          }
          case "default": {
            token.kind = GoToken.default;
            break;
          }
          case "func": {
            token.kind = GoToken.func;
            break;
          }
          case "interface": {
            token.kind = GoToken.interface;
            break;
          }
          case "select": {
            token.kind = GoToken.select;
            break;
          }
          case "case": {
            token.kind = GoToken.case;
            break;
          }
          case "defer": {
            token.kind = GoToken.defer;
            break;
          }
          case "go": {
            token.kind = GoToken.go;
            break;
          }
          case "map": {
            token.kind = GoToken.map;
            break;
          }
          case "struct": {
            token.kind = GoToken.struct;
            break;
          }
          case "chan": {
            token.kind = GoToken.chan;
            break;
          }
          case "else": {
            token.kind = GoToken.else;
            break;
          }
          case "goto": {
            token.kind = GoToken.goto;
            break;
          }
          case "package": {
            token.kind = GoToken.package;
            break;
          }
          case "switch": {
            token.kind = GoToken.switch;
            break;
          }
          case "const": {
            token.kind = GoToken.const;
            break;
          }
          case "fallthrough": {
            token.kind = GoToken.fallthrough;
            break;
          }
          case "if": {
            token.kind = GoToken.if;
            break;
          }
          case "range": {
            token.kind = GoToken.range;
            break;
          }
          case "type": {
            token.kind = GoToken.type;
            break;
          }
          case "continue": {
            token.kind = GoToken.continue;
            break;
          }
          case "for": {
            token.kind = GoToken.for;
            break;
          }
          case "import": {
            token.kind = GoToken.import;
            break;
          }
          case "return": {
            token.kind = GoToken.return;
            break;
          }
          case "var": {
            token.kind = GoToken.var;
            break;
          }
          case "nil": {
            token.kind = GoToken.nil_lit;
            break;
          }
          default: {
            token.kind = GoToken.identifier;
            break;
          }
        }
      }
    }
  }
}

enum Command {
  goRuneToVRuneSelection = "macros.go2v.rune.selection",
  goRuneToVRuneDocuemnt = "macros.go2v.rune.document",
  goToV_switchDocument = "macros.go2v.switch.document",
  goToV_switchSelection = "macros.go2v.switch.selection",
  goToV_identifierDocument = "macros.go2v.identifier.document",
  goToV_identifierSelection = "macros.go2v.identifier.selection",
}

function applyIdentifierRewrite(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit,
  range: vscode.Range
) {
  let count = 0;
  const scanner = new Scanner(textEditor.document, range);
  const initial = (scanner.text = textEditor.document.getText());
  let char = eof;

  scanner.findNextIdentifierStart();

  return count;
}

function applyRuneRewrite(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit,
  range: vscode.Range
) {
  let count = 0;
  const scanner = new Scanner(textEditor.document, range);
  const initial = (scanner.text = textEditor.document.getText());
  let token = new Token(GoToken.unknown, GoTokenCategory.unknown, -1, -1);
  while (token.kind !== GoToken.eof) {
    scanner.nextToken(token);
    debugger;
    if (token.kind === GoToken.rune_lit) {
      const lit = scanner.literal(token);
      scanner.replace("`" + lit.substring(1, lit.length - 1) + "`", token);
      count++;
    }
  }

  if (initial !== scanner.text) {
    edit.delete(
      new vscode.Range(
        textEditor.document.positionAt(0),
        textEditor.document.positionAt(initial.length)
      )
    );
    edit.insert(textEditor.document.positionAt(0), scanner.text);
  }

  return count;
}

type CommandFunc = (
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) => void;

export class Extension {
  context: vscode.ExtensionContext;
  constructor(context) {
    this.context = context;

    this.start();
  }

  start() {
    this.registerCommands();
  }

  commands: vscode.Disposable[] = [];

  registerCommand(command: Command, cb: CommandFunc): vscode.Disposable {
    return vscode.commands.registerTextEditorCommand(
      command,
      (textEditor, edit) => {
        try {
          cb(textEditor, edit);
        } catch (exception) {
          console.error(`${command} failed:`, exception);
        }
      }
    );
  }

  registerCommands() {
    this.commands.push(
      this.registerCommand(
        Command.goRuneToVRuneSelection,
        (textEditor, edit) => {
          if (textEditor.selection.isEmpty) {
            vscode.window.showErrorMessage("No text selected");
            return;
          }

          let count = applyRuneRewrite(textEditor, edit, textEditor.selection);
          vscode.window.showInformationMessage(`Rewrote ${count} runes`);
        }
      )
    );

    this.commands.push(
      this.registerCommand(
        Command.goRuneToVRuneDocuemnt,
        (textEditor, edit) => {
          const range = new vscode.Range(
            textEditor.document.positionAt(0),
            textEditor.document.positionAt(
              textEditor.document.getText().length - 1
            )
          );
          if (range.isEmpty) {
            vscode.window.showErrorMessage("No text");
            return;
          }

          let count = applyRuneRewrite(textEditor, edit, range);
          vscode.window.showInformationMessage(`Rewrote ${count} runes`);
        }
      )
    );
  }

  dispose() {
    console.log("DISPOSE", arguments);
    for (let command of this.commands) {
      command.dispose();
    }
    this.commands.length = 0;
  }
}
