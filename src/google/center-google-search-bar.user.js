// ==UserScript==
// @name         Center Google Search Bar
// @namespace    https://github.com/johnnymillergh/tampermonkey-scripts
// @version      1.0.2
// @description  Centers the Google search bar on the page
// @author       johnnymillergh
// @match        https://www.google.com/search?q=*
// @match        https://www.bing.com/search?q=*
// @include      /^https:\/\/www\.google\.[a-z]{2,3}(\.[a-z]{2})?\/search\?q=.+$/
// @include      /^https:\/\/www\.bing\.[a-z]{2,3}(\.[a-z]{2})?\/search\?q=.+$/
// @grant        none
// @license      Apache-2.0
// @homepage     https://github.com/johnnymillergh/tampermonkey-scripts
// @supportURL   https://github.com/johnnymillergh/tampermonkey-scripts/issues
// @updateURL    https://raw.githubusercontent.com/johnnymillergh/tampermonkey-scripts/main/src/google/center-google-search-bar.user.js
// @downloadURL  https://raw.githubusercontent.com/johnnymillergh/tampermonkey-scripts/main/src/google/center-google-search-bar.user.js
// ==/UserScript==

(function () {
    'use strict';

    console.log('[Center Google Search Bar] loaded!');

    function addStyle (css) {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    const customStyles = `
        @media (min-width: 1537px) {
            #searchform .tsf {
                margin: 0 auto;
            }
            body {
                max-width: max-content;
                margin-left: auto;
                margin-right: auto;
            }
        }
    `;

    addStyle(customStyles);
})();
