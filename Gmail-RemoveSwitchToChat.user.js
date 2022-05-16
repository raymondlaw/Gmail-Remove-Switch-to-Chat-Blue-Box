// ==UserScript==
// @name         Gmail Remove "Switch to Chat" Blue Box
// @namespace    GmailRemoveSwitchToChat
// @version      0.1
// @description  Gets Rid of Hangouts is Going Away Box in Gmail
// @author       You
// @match        https://hangouts.google.com/webchat/u/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    });
}

function main(){
    waitForElm('.eNQYf').then((elm) => {
        elm.style.display = "none";
    });
}
main();
