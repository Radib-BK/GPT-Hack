document.getElementById("run").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab?.id) return;

  await chrome.runtime.sendMessage({
    action: "RUN_SCRIPT",
    tabId: tab.id
  });

  window.close();
});
