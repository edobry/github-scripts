// ==UserScript==
// @name         Github Editor Formatting
// @namespace    http://dobry.me/
// @version      0.1
// @description  Sets Github editor indentation settings to 4 spaces
// @author       Eugene Dobry
// @match        https://github.com/*/*/edit/*
// @grant        none
// ==/UserScript==

$(".js-code-indent-mode").val("spaces").change();
$(".js-code-indent-width").val("4").change();

