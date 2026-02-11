# Tampermonkey Scripts

A collection of userscripts for [Tampermonkey](https://www.tampermonkey.net/) browser extension.

## 📖 What is Tampermonkey?

Tampermonkey is a popular userscript manager available for Chrome, Firefox, Safari, Edge, and other browsers. It allows you to run custom JavaScript on web pages to add features, modify behavior, or automate tasks.

## 🚀 Installation

### Prerequisites

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension for your browser:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### Installing Scripts

1. Browse the [src/](./src/) directory to find the script you want
2. Click on the raw file link
3. Tampermonkey should automatically detect the script and prompt you to install it
4. Click "Install" to add the script to your Tampermonkey dashboard

Alternatively, you can manually copy and paste the script content into a new Tampermonkey script.

## 📂 Repository Structure

```
tampermonkey-scripts/
├── src/                    # Source userscripts (.user.js files)
├── dist/                   # Compiled/minified scripts (if applicable)
├── scripts/                # Build and deployment scripts
├── LICENSE                 # Apache License 2.0
└── README.md              # This file
```

## 📜 Available Scripts

Scripts are organized in the `src/` directory. Each script includes:
- Proper Tampermonkey metadata headers
- Description of functionality
- Target websites
- Version information

Browse the [src/](./src/) directory to see all available scripts.

## 🛠️ Development

### Creating a New Script

1. Create a new `.user.js` file in the `src/` directory
2. Add the required Tampermonkey metadata block:

```javascript
// ==UserScript==
// @name         Your Script Name
// @namespace    https://github.com/johnnymillergh/tampermonkey-scripts
// @version      1.0.0
// @description  Brief description of what your script does
// @author       Your Name
// @match        https://example.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here
})();
```

### Metadata Fields

- `@name`: Display name of your script
- `@namespace`: Unique identifier (typically your GitHub repo URL)
- `@version`: Semantic version number (e.g., 1.0.0)
- `@description`: Brief explanation of functionality
- `@author`: Script author
- `@match`: URL patterns where the script should run
- `@grant`: Tampermonkey API permissions needed (use `none` if no special permissions required)

For more metadata options, see the [Tampermonkey documentation](https://www.tampermonkey.net/documentation.php).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-script`)
3. Commit your changes (`git commit -m 'Add amazing script'`)
4. Push to the branch (`git push origin feature/amazing-script`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

These scripts are provided as-is. Use them at your own risk. Always review scripts before installing them to ensure they don't contain malicious code.

## 🔗 Useful Links

- [Tampermonkey Official Website](https://www.tampermonkey.net/)
- [Tampermonkey Documentation](https://www.tampermonkey.net/documentation.php)
- [Greasy Fork](https://greasyfork.org/) - Repository of userscripts
- [OpenUserJS](https://openuserjs.org/) - Alternative userscript repository
