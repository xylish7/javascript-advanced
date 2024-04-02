function warnUserOnce() {
  if (!sessionStorage.getItem("warned")) {
    alert("This is a warning message!");
    sessionStorage.setItem("warned", "true");
  }
}

// This will only show the alert once per session. Reloading the page will not show the alert again, only closing the tab or browser will reset the session storage.
warnUserOnce();
