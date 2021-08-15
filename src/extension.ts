import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("yw-world.yw-world", () => {
    vscode.window.showInformationMessage("Hello World from yw-world!")
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
