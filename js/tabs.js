// ここからコードを書いてください
export function setupTabs() {
  const homeTab = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  homeTab.addEventListener("click", () => {
    homeSection.classList.remove("hidden");
    converterSection.classList.add("hidden");
  });

  converterTab.addEventListener("click", () => {
    converterSection.classList.remove("hidden");
    homeSection.classList.add("hidden");
  });
}
