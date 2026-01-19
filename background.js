chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.action !== "RUN_SCRIPT" || !msg.tabId) return;

  chrome.scripting.executeScript({
    target: { tabId: msg.tabId },
    files: ["content.js"]
  });
});
