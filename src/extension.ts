// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {
// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
console.log(
	'Congratulations, your extension "JavaSmartSemicolon" is now active!'
);

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// let disposable = vscode.commands.registerCommand(
// 	"JavaSmartSemicolon.helloWorld",
// 	() => {
// 		// The code you place here will be executed every time your command is executed
// 		// Display a message box to the user
// 		vscode.window.showInformationMessage(
// 			"Hello World from Java Smart Semicolon!"
// 		);
// 	}
// );

// 	context.subscriptions.push(disposable);
// }

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		"JavaSmartSemicolon.addSemicolons",
		() => {
			const editor = vscode.window.activeTextEditor;

			if (editor) {
				const document = editor.document;
				for (let i = 0; i < document.lineCount; i++) {
					const line = document.lineAt(i);
					const edit = new vscode.WorkspaceEdit();
					const regex =
						/.*\b(int|float|double|boolean|char|byte|short|long)\b[^;]*$/;
					const regexParenthesis = /.*(?<!\.)\)\s*$/;
					for (let i = 0; i < document.lineCount; i++) {
						const line = document.lineAt(i);
						// Do something with the line, such as print it to the console
						if (regex.test(line.text)) {
							edit.insert(document.uri, line.range.end, ";");
						} else if (regexParenthesis.test(line.text)) {
							edit.insert(document.uri, line.range.end, ";");
						}
					}
					vscode.workspace.applyEdit(edit);
				}
			}
		}
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
