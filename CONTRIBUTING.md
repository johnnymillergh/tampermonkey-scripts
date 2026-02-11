# Contributing to Tampermonkey Scripts

Thank you for your interest in contributing to this Tampermonkey Scripts repository! 

## How to Contribute

### Reporting Issues

- Check if the issue already exists in the [issue tracker](https://github.com/johnnymillergh/tampermonkey-scripts/issues)
- Use a clear and descriptive title
- Provide detailed information about the issue
- Include browser version and Tampermonkey version

### Submitting Scripts

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-script-name
   ```

3. **Add your script**
   - Place your script in the `src/` directory
   - Name it descriptively with `.user.js` extension (e.g., `github-enhancer.user.js`)
   - Follow the script format guidelines below

4. **Test your script**
   - Install it in Tampermonkey
   - Verify it works on the target websites
   - Ensure no console errors

5. **Commit your changes**
   ```bash
   git commit -m "Add: [Script Name] - Brief description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-script-name
   ```

7. **Create a Pull Request**
   - Provide a clear description of what your script does
   - List the websites it works on
   - Mention any special permissions required

## Script Format Guidelines

Every script should include:

```javascript
// ==UserScript==
// @name         Descriptive Script Name
// @namespace    https://github.com/johnnymillergh/tampermonkey-scripts
// @version      1.0.0
// @description  Clear description of functionality
// @author       Your Name
// @match        https://targetwebsite.com/*
// @grant        none
// @license      Apache-2.0
// @homepage     https://github.com/johnnymillergh/tampermonkey-scripts
// ==/UserScript==

(function() {
    'use strict';
    // Your code here
})();
```

### Best Practices

- Use `'use strict';` mode
- Wrap code in an IIFE (Immediately Invoked Function Expression)
- Add comments for complex logic
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Minimize dependencies
- Request only necessary `@grant` permissions
- Be specific with `@match` patterns
- Test on multiple browsers if possible

### Code Style

- Use 4 spaces for indentation
- Use meaningful variable names
- Follow JavaScript best practices
- Keep code clean and readable

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Check existing scripts for examples
- Review the [Tampermonkey documentation](https://www.tampermonkey.net/documentation.php)

Thank you for contributing! 🎉
