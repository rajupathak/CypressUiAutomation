/* global browser */

const path = require("path");

/**
 * The main page object that contains all methods, selectors, and functionality
 * that is shared across all page objects.
 *
 * @class PageObject
 */
export default class Page {
  /**
   * Opens a sub page of the page.
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(path);
  }
}
