(() => {
  const BUTTON_ID = "composer-submit-button";

  const btn = document.getElementById(BUTTON_ID);

  if (!btn) {
    alert("Button not found");
    return;
  }

  // remove disabled attribute
  btn.removeAttribute("disabled");

  // also remove JS property
  btn.disabled = false;

  // aria accessibility
  btn.setAttribute("aria-disabled", "false");
})();
