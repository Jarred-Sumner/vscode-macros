import { enableHotReload, hotRequire } from "@hediet/node-reload";
import * as vscode from "vscode";

// only activate hot reload while developing the extension
enableHotReload({ entryModule: module });

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    // `hotRequire` returns a Disposable
    // that disposes the last returned instance
    // and makes it stop watching.
    hotRequire<typeof import("./index")>(module, "./index", (logic) => {
      // This callback is called immediately
      // and whenever "./logic"
      // or one of its dependencies changes.
      // We simply instantiate our extension again on every change.
      // `dispose` is called on previously returned instances.
      return new logic.Extension();
    })
  );
}
