// try {
//   chrome.devtools.panels.create(
//     "Dev Tools",
//     "34x34.png",
//     "src/pages/devtools/panel.html"
//   );
// } catch (e) {
//   console.error("falcon - error: ",e);
// }
chrome.devtools.panels.create('Dev tool', '34x34.png', 'src/pages/popup/index.html', () => {
  console.log('user switched to this panel');
});