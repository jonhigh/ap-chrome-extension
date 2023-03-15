function saveOptions(e) {
 browser.storage.local.set({
  agileplace_api_key: document.querySelector("#agileplace_api_key").value
 });
 e.preventDefault();
}

function restoreOptions() {
 let gettingItem = browser.storage.local.get('agileplace_api_key');
 gettingItem.then((res) => {
  document.querySelector("#agileplace_api_key").value = res.agileplace_api_key || '';
 });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
