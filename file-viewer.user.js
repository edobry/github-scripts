// ==UserScript==
// @name         Github Formatting
// @namespace    http://dobry.me/
// @version      0.1
// @description  Sets Github file viewer tab width to 4 spaces
// @author       Eugene Dobry
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

var tabSize = function(size) { return "tab-size-" + size; };

$("." + tabSize(8)).each(function() {
    $(this).removeClass(tabSize(8)).addClass(tabSize(4));
});

