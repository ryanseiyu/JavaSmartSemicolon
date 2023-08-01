/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {
// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
console.log('Congratulations, your extension "JavaSmartSemicolon" is now active!');
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
function activate(context) {
    let disposable = vscode.commands.registerCommand("JavaSmartSemicolon.addSemicolons", () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                const edit = new vscode.WorkspaceEdit();
                const regex = /.*\b(int|float|double|boolean|char|byte|short|long|String)\b[^;]*$(?<!{|})/;
                const regexSystem = /.*\)(?<!\\)\s*$/;
                for (let i = 0; i < document.lineCount; i++) {
                    const line = document.lineAt(i);
                    // Do something with the line, such as print it to the console
                    if (regex.test(line.text) ||
                        regexSystem.test(line.text)) {
                        edit.insert(document.uri, line.range.end, ";");
                    }
                }
                vscode.workspace.applyEdit(edit);
            }
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map