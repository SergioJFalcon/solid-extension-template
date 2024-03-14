console.log("background loaded");

// On Install
chrome.runtime.onInstalled.addListener(function () {
  // Set default preferences
  chrome.storage.sync.set({
    content: false,
    devtools: true,
    popup: true,
    newtab: false,
    panel: true,
  });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the div was found
  if (message.divFound) {
      console.log("Div with id 'example' found on the current page.");
      // Perform further actions here
  }
});

console.log("background loaded 2");