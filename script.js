(() => {
  "use strict";

  /* ---------------------------------------------------------------------
     Theme (light / dark) — persisted in localStorage, respects OS default
     --------------------------------------------------------------------- */
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleLabel = toggleBtn?.querySelector("[data-label]");
  const STORAGE_KEY = "luffy-site-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggleBtn?.setAttribute("aria-pressed", "true");
      if (toggleLabel) toggleLabel.textContent = "حالت روز";
    } else {
      root.removeAttribute("data-theme");
      toggleBtn?.setAttribute("aria-pressed", "false");
      if (toggleLabel) toggleLabel.textContent = "حالت شب";
    }
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  applyTheme(getPreferredTheme());

  toggleBtn?.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------------------------------------------------------------------
     Scroll-reveal animations
     --------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Math.min(i % 6, 5) * 70;
            setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------------
     Active link highlighting in the anchor nav
     --------------------------------------------------------------------- */
  const sections = document.querySelectorAll("main .section, .media");
  const anchorLinks = document.querySelectorAll(".anchor-nav a");

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            anchorLinks.forEach((a) => {
              a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => {
      if (s.id) navObserver.observe(s);
    });
  }

  /* ---------------------------------------------------------------------
     Contact form — lightweight client-side feedback (no backend wired up)
     --------------------------------------------------------------------- */
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (status) {
      status.textContent = "پیام شما با موفقیت ثبت شد. متشکریم! 🏴‍☠️";
    }
    form.reset();
  });
})();
