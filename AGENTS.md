# AGENTS.md - Development Guide

This document provides essential information for AI coding agents working in this Tampermonkey Scripts repository.

## Project Overview

A collection of userscripts for the Tampermonkey browser extension. Scripts are plain JavaScript files with special metadata headers that modify web page behavior.

**Technology Stack:**
- Vanilla JavaScript (ES6+)
- No build process, no transpilation
- No TypeScript, no linting, no testing framework
- Browser-native APIs only

**Repository Structure:**
```
tampermonkey-scripts/
├── src/                    # Source userscripts (.user.js files)
├── CONTRIBUTING.md         # Contribution guidelines
├── .editorconfig          # Editor configuration
└── package.json           # Project metadata (no dependencies)
```

---

## Build/Test/Lint Commands

### Available Scripts

```bash
# No build command - scripts run directly in browser
# No lint command - project has no linter configured
# No test command - testing is manual in Tampermonkey
npm test  # Currently a no-op that exits 0
```

### Manual Testing Process

1. Open Tampermonkey dashboard in your browser
2. Create new script or update existing
3. Paste the `.user.js` file contents
4. Navigate to target website matching `@match` pattern
5. Verify functionality in browser console
6. Check for JavaScript errors in DevTools

**Testing Checklist:**
- Script loads without console errors
- Functionality works on all `@match` URLs
- No conflicts with existing page scripts
- Close/dismiss buttons work (if applicable)
- Performance is acceptable (no lag/freezing)

---

## Code Style Guidelines

### File Naming

- All userscripts: `descriptive-name.user.js` (kebab-case)
- Place in `src/` directory
- Name should describe functionality clearly

### Indentation & Formatting

**From .editorconfig:**
- **Charset:** UTF-8
- **Line endings:** LF (Unix-style)
- **Indentation:** 4 spaces (JavaScript files)
- **JSON files:** 2 spaces
- **Final newline:** Yes (all files)
- **Trailing whitespace:** Trim (except Markdown)

```javascript
// CORRECT
function doSomething() {
    const value = 42;
    return value;
}

// WRONG - 2 spaces
function doSomething() {
  const value = 42;
  return value;
}
```

### Script Structure (MANDATORY)

Every `.user.js` file MUST follow this exact structure:

```javascript
// ==UserScript==
// @name         Descriptive Script Name
// @namespace    https://github.com/johnnymillergh/tampermonkey-scripts
// @version      1.0.0
// @description  Clear description of what this script does
// @author       Your Name
// @match        https://targetwebsite.com/*
// @grant        none
// @license      Apache-2.0
// @homepage     https://github.com/johnnymillergh/tampermonkey-scripts
// @supportURL   https://github.com/johnnymillergh/tampermonkey-scripts/issues
// @updateURL    https://raw.githubusercontent.com/johnnymillergh/tampermonkey-scripts/main/src/your-script.user.js
// @downloadURL  https://raw.githubusercontent.com/johnnymillergh/tampermonkey-scripts/main/src/your-script.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here

})();
```

### Metadata Headers

**Required fields:**
- `@name` - Display name in Tampermonkey dashboard
- `@namespace` - Always `https://github.com/johnnymillergh/tampermonkey-scripts`
- `@version` - Semantic versioning (MAJOR.MINOR.PATCH)
- `@description` - One-line functionality summary
- `@author` - Script author name
- `@match` - URL patterns where script runs (be specific)
- `@grant` - Tampermonkey permissions (use `none` unless needed)
- `@license` - Always `Apache-2.0` for this repo

**Recommended fields:**
- `@homepage`, `@supportURL`, `@updateURL`, `@downloadURL` - Use template above

### JavaScript Conventions

**ES6+ Features:** Allowed and encouraged
```javascript
// Use const/let (never var)
const element = document.createElement('div');
let counter = 0;

// Arrow functions
closeBtn.onclick = () => banner.remove();

// Template literals
banner.style.cssText = `
    position: fixed;
    top: 0;
    width: 100%;
`;
```

**IIFE Pattern:** MANDATORY
```javascript
// ALWAYS wrap your code
(function() {
    'use strict';
    // All script code goes here
})();
```

**Strict Mode:** MANDATORY
```javascript
'use strict';  // First line inside IIFE
```

### Naming Conventions

- **Variables/Functions:** camelCase
  ```javascript
  const bannerElement = document.createElement('div');
  function createCloseButton() { }
  ```

- **Constants:** UPPER_SNAKE_CASE for true constants
  ```javascript
  const MAX_RETRIES = 3;
  const API_ENDPOINT = 'https://api.example.com';
  ```

### DOM Manipulation

**Check document ready state:**
```javascript
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // DOM manipulation here
    });
} else {
    // DOM already loaded
}
```

**CSS injection:**
```javascript
// Inline styles using cssText
element.style.cssText = `
    property: value;
    another-property: value;
`;

// NOT separate assignments (verbose)
element.style.property = 'value';
element.style.anotherProperty = 'value';
```

### Error Handling

No formal guidelines, but recommended:
```javascript
try {
    // Risky operation
} catch (error) {
    console.error('Script error:', error);
}
```

### Logging

Use `console.log/error` for debugging:
```javascript
console.log('Script loaded!');
console.error('Failed to find element:', selector);
```

---

## Permissions (@grant)

**Default:** Use `@grant none` unless you need Tampermonkey APIs

**When to use specific grants:**
- `@grant GM_xmlhttpRequest` - Cross-origin requests
- `@grant GM_setValue` / `GM_getValue` - Persistent storage
- `@grant GM_addStyle` - CSS injection
- `@grant window.close` - Close tabs

See [Tampermonkey API docs](https://www.tampermonkey.net/documentation.php) for full list.

---

## Git Workflow

From CONTRIBUTING.md:

```bash
# 1. Create feature branch
git checkout -b feature/your-script-name

# 2. Add your script to src/
# 3. Test manually in Tampermonkey

# 4. Commit with descriptive message
git commit -m "Add: [Script Name] - Brief description"

# 5. Push and create PR
git push origin feature/your-script-name
```

**Commit message format:**
- `Add: [Script Name] - Description` (new scripts)
- `Fix: [Script Name] - What was fixed`
- `Update: [Script Name] - What changed`

---

## Common Pitfalls

1. **Don't forget strict mode** - Always `'use strict';`
2. **Don't use var** - Use const/let
3. **Don't skip IIFE wrapper** - Prevents global namespace pollution
4. **Match patterns too broad** - Be specific with `@match`
5. **Requesting unnecessary grants** - Start with `@grant none`
6. **Not checking readyState** - DOM might not be ready
7. **4 spaces, not tabs** - Follow .editorconfig

---

## Resources

- [Tampermonkey Documentation](https://www.tampermonkey.net/documentation.php)
- [Greasy Fork](https://greasyfork.org/) - Userscript examples
- [Repository CONTRIBUTING.md](./CONTRIBUTING.md) - Detailed contribution guide
- [Repository README.md](./README.md) - Installation and usage

---

**Last Updated:** 2026-02-11
