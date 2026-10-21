const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  const updateThemeToggle = () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    themeToggle.setAttribute("aria-checked", String(isDark));
  };

  updateThemeToggle();

  themeToggle.addEventListener("click", () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    updateThemeToggle();
  });
}
