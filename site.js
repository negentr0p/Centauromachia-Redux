// Shared by every page. Puts the contact address together in the browser, so simple address-harvesting
// scripts do not find it in the page source. Without JavaScript the address is shown as "name [at] domain".
document.querySelectorAll("a.mail").forEach((a) => {
  const address = a.dataset.u + "@" + a.dataset.d;
  a.href = "mailto:" + address + (a.dataset.subject ? "?subject=" + encodeURIComponent(a.dataset.subject) : "");
  a.textContent = address;
});
