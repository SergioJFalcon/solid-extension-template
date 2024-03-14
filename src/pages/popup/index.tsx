import { render } from "solid-js/web";
import "./index.css";
import Popup from "./Popup";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

// Render the Popup component if the popup option is enabled
chrome.storage.sync.get(['popup'], (result) => {
  if (result.popup) {
    render(Popup, appContainer);
  }
});
