# JavaSmartSemicolon README

JavaSmartSemicolon is a Visual Studio Code extension that automatically adds semicolons to the end of Java code lines that require them.

## Features

It uses regular expressions to identify lines that end with a Java declaration or a method call without a semicolon, and adds the missing semicolon at the end of the line. The extension also checks if a line ends with a closing parenthesis and adds a semicolon if necessary, but only if the line does not start with a dot. This saves time and reduces errors when writing Java code, and helps ensure that your code is properly formatted and free of syntax errors.

![Using](/src/images/using.gif "animation")

## Requirements

Just press F1 or your Code Command Palette and chose "Add Semicolons".

## Extension Settings

This extension contributes the following settings:

-   `JavaSmartSemicolon.addSemicolons`: Will check for any line that doesn't have a semicolon and apply it.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of JavaSmartSemicolon

<!-- ### 1.0.1

Fixed issue #. -->

<!-- ## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

-   [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines) -->

<!-- ## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

-   Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
-   Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
-   Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets. -->

<!-- ## For more information

-   [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
-   [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!** -->
