// GPT-Hack Bookmarklet
// Add this as a bookmark on iOS/iPad Safari with the code below

javascript:(function(){const BUTTON_ID="composer-submit-button";const btn=document.getElementById(BUTTON_ID);if(!btn){alert("Button not found");return;}btn.removeAttribute("disabled");btn.disabled=false;btn.setAttribute("aria-disabled","false");alert("Button enabled");})();
