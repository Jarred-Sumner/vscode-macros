import * as vscode from "vscode";
import { Disposable } from "@hediet/std/disposable";

export class Extension {
  dispose = Disposable.fn();
  constructor() {
    this.s = vscode.window.createStatusBarItem();
    this.s.text = "Hello World!";
    this.s.show();
  }

  s: vscode.StatusBarItem;
}
