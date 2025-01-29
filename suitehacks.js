if (!window.location.href.includes("-sb") && window.location.href.includes(".com/app/")) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = browser.runtime.getURL("styles.css");
    document.head.appendChild(link);
}