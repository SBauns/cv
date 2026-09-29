document.addEventListener("DOMContentLoaded", async () => {
  const currentFileName = window.location.pathname.split("/").pop() || "index.html";

  const loadPartial = async (partialUrl, placeholderId) => {
    const placeholder = document.getElementById(placeholderId);
    const response = await fetch(partialUrl);
    if (!response.ok) {
      throw new Error(`Could not load ${partialUrl}: ${response.status}`);
    }
    placeholder.innerHTML = await response.text();
  };

  await Promise.all([
    loadPartial("partials/header.html", "shared-header"),
    loadPartial("partials/footer.html", "shared-footer")
  ]);

  document.querySelectorAll(".site-nav a").forEach((navigationLink) => {
    if (navigationLink.getAttribute("href") === currentFileName) {
      navigationLink.classList.add("active");
    }
  });
});