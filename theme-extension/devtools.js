function isStable() {
  return +/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] === stableVersion
}

const stableVersion = 62
const stylesheet = isStable() ? 'stable.css' : 'canary.css'

fetch(`/${stylesheet}`)
  .then(res => res.text())
  .then(styles => chrome.devtools.panels.applyStyleSheet(styles))
  .catch(e => console.error(e))
