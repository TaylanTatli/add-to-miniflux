function addToMiniflux() {
    browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      browser.tabs.create({
        url: 'https://reader.miniflux.app/bookmarklet?uri='+encodeURIComponent(tabs[0].url)
      });
  })
}

browser.browserAction.onClicked.addListener(addToMiniflux);
