chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.instagram/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: './instagram.js'}, () => console.log('instagram script injected'));
        } else if (/^https:\/\/www\.facebook/.test(current_tab_info.url) ) {
            chrome.tabs.executeScript(null, {file: './facebook.js'}, () => console.log('fb script injected'));
        } else if ( /^https:\/\/twitter/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: './twitter.js'}, () => console.log('twitter script injected'));
        }
    });
});