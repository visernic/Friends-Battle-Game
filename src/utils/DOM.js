/**
 * DOM Manipulation Helpers
 * A jQuery-like shorthand for selecting elements.
 */

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const show = (element) => {
    if (element) element.classList.remove('hidden');
};

export const hide = (element) => {
    if (element) element.classList.add('hidden');
};
