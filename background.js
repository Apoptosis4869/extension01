// create context menu
chrome.runtime.onInstalled.addListener(function () {
   
    // create menu for page
    chrome.contextMenus.create({
        title: 'Test page menu item',
        contexts: ['page'],
        id: 'page'
    });

    // create menu for selection
    chrome.contextMenus.create({
        title: 'Test selection menu item',
        contexts: ['selection','link'],
        id: 'selection'
    });
});

// add click event listener
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    console.log(info);
    if(info.linkUrl){ // link selection menu clicked
        chrome.tabs.create({
            // concat selection link to popup.html
            url: chrome.runtime.getURL('popup.html') + '?selection=' + encodeURIComponent(info.linkUrl),
            active: false
        }, function(tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true
            });
        });
    }
    if(info.selectionText){ // text selection menu clicked
        
    }
    // Standard context menu item function
    console.log('Standard context menu item clicked.');
});