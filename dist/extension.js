(()=>{"use strict";var t={496:t=>{t.exports=require("vscode")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}var n={};(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const e=o(496);console.log('Congratulations, your extension "JavaSmartSemicolon" is now active!'),t.activate=function(t){let o=e.commands.registerCommand("JavaSmartSemicolon.addSemicolons",(()=>{const t=e.window.activeTextEditor;if(t){const o=t.document;for(let t=0;t<o.lineCount;t++){o.lineAt(t);const n=new e.WorkspaceEdit,r=/.*\b(int|float|double|boolean|char|byte|short|long|String)\b[^;]*$(?<!{|})/,i=/.*\)(?<!\\)\s*$/;for(let t=0;t<o.lineCount;t++){const e=o.lineAt(t);(r.test(e.text)||i.test(e.text))&&n.insert(o.uri,e.range.end,";")}e.workspace.applyEdit(n)}}}));t.subscriptions.push(o)},t.deactivate=function(){}})(),module.exports=n})();