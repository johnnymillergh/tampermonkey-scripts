// ==UserScript==
// @name         Center Google Search Bar
// @namespace    https://github.com/johnnymillergh/tampermonkey-scripts
// @version      1.1.0
// @description  Centers the Google search bar on the page
// @author       johnnymillergh
// @match        https://www.google.com/search?*
// @match        https://www.bing.com/search?*
// @include      /^https:\/\/www\.google\.[a-z]{2,3}(\.[a-z]{2})?\/search\?q=.+$/
// @include      /^https:\/\/www\.bing\.[a-z]{2,3}(\.[a-z]{2})?\/search\?qs=.+$/
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

    function centerWithAnimation() {
        if (window.innerWidth <= 1537) return;

        const body = document.body;

        // FLIP: First — record current position before centering
        const initialLeft = body.getBoundingClientRect().left;

        // FLIP: Last — apply centering styles
        body.style.maxWidth = 'max-content';
        body.style.marginLeft = 'auto';
        body.style.marginRight = 'auto';

        const tsf = document.querySelector('#searchform .tsf');
        if (tsf) {
            tsf.style.margin = '0 auto';
        }

        // FLIP: Invert — translate body back to original position instantly
        const deltaX = initialLeft - body.getBoundingClientRect().left;
        if (deltaX === 0) return;

        // Preserve any existing transform by prepending our translation
        const existingTransform = body.style.transform || '';
        body.style.transform = existingTransform
            ? `translateX(${deltaX}px) ${existingTransform}`
            : `translateX(${deltaX}px)`;

        // FLIP: Play — animate to the final centered position
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                body.style.transition = 'transform 0.6s ease';
                body.style.transform = existingTransform || 'translateX(0)';
            });
        });

        // Clean up inline transition and transform styles after animation
        body.addEventListener('transitionend', function onTransitionEnd(event) {
            if (event.propertyName !== 'transform') return;
            body.removeEventListener('transitionend', onTransitionEnd);
            body.style.transition = '';
            if (!existingTransform) {
                body.style.transform = '';
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', centerWithAnimation);
    } else {
        centerWithAnimation();
    }
})();
