// ==UserScript==
// @name         Example Tampermonkey Script
// @namespace    https://github.com/johnnymillergh/tampermonkey-scripts
// @version      1.0.0
// @description  An example script demonstrating Tampermonkey best practices
// @author       johnnymillergh
// @match        https://example.com/*
// @grant        none
// @license      Apache-2.0
// @homepage     https://github.com/johnnymillergh/tampermonkey-scripts
// @supportURL   https://github.com/johnnymillergh/tampermonkey-scripts/issues
// @updateURL    https://raw.githubusercontent.com/johnnymillergh/tampermonkey-scripts/main/src/example-script.user.js
// @downloadURL  https://raw.githubusercontent.com/johnnymillergh/tampermonkey-scripts/main/src/example-script.user.js
// ==/UserScript==

(function() {
    'use strict';

    // This is an example script that demonstrates basic Tampermonkey functionality
    // It adds a simple banner to the top of example.com pages

    console.log('Example Tampermonkey Script loaded!');

    // Create a banner element
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #4CAF50;
        color: white;
        text-align: center;
        padding: 10px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    banner.textContent = '✨ This page is enhanced by a Tampermonkey script!';

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0 5px;
    `;
    closeBtn.onclick = () => banner.remove();
    banner.appendChild(closeBtn);

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.insertBefore(banner, document.body.firstChild);
        });
    } else {
        document.body.insertBefore(banner, document.body.firstChild);
    }

})();
