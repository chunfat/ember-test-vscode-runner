# Ember Test Runner

A Visual Studio Code extension for running Ember.js tests directly from your editor.

## Features

- Run individual tests with a single click
- Run entire test modules
- CodeLens integration shows run buttons directly above your tests
- Supports JavaScript and TypeScript test files
- Debug mode for troubleshooting

## Installation

1. Install from the VS Code Marketplace
2. Or download the `.vsix` file and install manually:
   ```
   code --install-extension ember-test-runner-0.0.1.vsix
   ```

## Usage

Open any Ember test file (matching pattern `**/*test.js` or `**/*test.ts`). You'll see CodeLens links above your test modules and individual tests:

- Click `▶ Run Module Tests` to run all tests within a module
- Click `▶ Run Test` to run a single test

Tests will open in your default browser using the configured test runner URL.

## Configuration

This extension contributes the following settings:

- `emberTestRunner.debug`: Enable/disable debug mode

You can also toggle debug mode by running the command:
- `Ember Test Runner: Toggle Debug Mode`

## Requirements

- Visual Studio Code v1.60.0 or higher
- Ember.js project with a functioning test suite
- Default test runner URL is `http://localhost:4200/tests` (can be customized in settings)

## Extension Development

1. Clone the repository
2. Run `npm install`
3. Press F5 to open a new window with the extension loaded
4. Open an Ember test file to see CodeLens in action
5. Make changes to the code and restart the debug session to test

## Build and Package

```bash
npm run vscode:prepublish
npx vsce package
```

## License

See the [LICENSE.md](LICENSE.md) file for details.
