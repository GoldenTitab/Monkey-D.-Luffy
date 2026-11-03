(() => {
  "use strict";

  /* ---------------------------------------------------------------------
     Theme switch — same design as the portfolio site (animated
     sun/moon switch, checkbox checked = dark), wired to this site's
     data-theme system and its own localStorage key.
     --------------------------------------------------------------------- */
  const root = document.documentElement;
  const themeCheckbox = document.getElementById("themeCheckbox");
  const STORAGE_KEY = "luffy-site-theme";
  let currentTheme = "light";
  let isThemeTransitioning = false;

  function createThemeOverlay() {
    let overlay = document.getElementById("theme-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "theme-overlay";
      overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        pointer-events: none; opacity: 0;
        background: radial-gradient(circle at var(--ox,50%) var(--oy,50%), var(--overlay-color) 0%, transparent 70%);
        transition: opacity 0.55s cubic-bezier(0.4,0,0.2,1);
      `;
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function applyTheme(theme) {
    currentTheme = theme;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (themeCheckbox) {
      themeCheckbox.checked = (theme === "dark");
      themeCheckbox.setAttribute("aria-label", theme === "dark" ? "تغییر به تم روشن" : "تغییر به تم تاریک");
    }
  }

  function setTheme(theme, originX, originY) {
    if (isThemeTransitioning) return;
    isThemeTransitioning = true;
    const overlay = createThemeOverlay();
    const ox = originX != null ? originX : 50;
    const oy = originY != null ? originY : 50;
    overlay.style.setProperty("--ox", ox + "%");
    overlay.style.setProperty("--oy", oy + "%");
    overlay.style.setProperty("--overlay-color", theme === "light" ? "#f5efdd" : "#0b1220");
    overlay.style.opacity = "1";
    setTimeout(() => {
      applyTheme(theme);
      localStorage.setItem(STORAGE_KEY, theme);
      overlay.style.opacity = "0";
      setTimeout(() => { isThemeTransitioning = false; }, 600);
    }, 280);
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  applyTheme(getPreferredTheme());

  themeCheckbox?.addEventListener("change", (e) => {
    let ox = 50, oy = 10;
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      ox = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      oy = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    }
    setTheme(currentTheme === "dark" ? "light" : "dark", ox, oy);
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
     Contact form — display only: there is no backend, so the form never
     claims a message was sent. The submit button is disabled in markup;
     this handler is only a guard that states the same honest message.
     --------------------------------------------------------------------- */
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (status) {
      status.textContent = "این فرم فقط نمایشی است؛ پیام شما به جایی ارسال نمی‌شود.";
    }
  });
})();
