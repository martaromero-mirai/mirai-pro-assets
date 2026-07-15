/* Pestana Pro — scripts de prehome
   - Top bar "Back to Pestana.com"
   - Fix email: trade@ → pro@pestana.com en el menú superior  */
(function () {

  function injectBar() {
    if (!document.getElementById("pestana-bar-css")) {
      var s = document.createElement("style");
      s.id = "pestana-bar-css";
      s.textContent =
        "#pestana-topbar{" +
          "display:block!important;width:100%!important;" +
          "background:#000!important;padding:9px 30px!important;" +
          "box-sizing:border-box!important;text-align:right!important;" +
          "font-family:Arial,sans-serif!important;font-size:13px!important;" +
          "font-weight:600!important;letter-spacing:.04em!important;" +
          "z-index:1002!important;" +
        "}" +
        "#pestana-topbar a{color:#fff!important;text-decoration:none!important;}";
      (document.head || document.documentElement).appendChild(s);
    }
    if (!document.getElementById("pestana-topbar")) {
      var bar = document.createElement("div");
      bar.id = "pestana-topbar";
      var a = document.createElement("a");
      a.href = "https://www.pestana.com";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "\u2190 Back to Pestana.com";
      bar.appendChild(a);
      var body = document.body;
      if (body.firstChild) body.insertBefore(bar, body.firstChild);
      else body.appendChild(bar);
    }
  }

  function fixMail() {
    var nuevo = "pro@pestana.com";
    document.querySelectorAll(".upper-menu__quicklinks-container .mail").forEach(function (span) {
      span.textContent = nuevo;
      var a = span.closest("a");
      if (a) a.setAttribute("href", "mailto:" + nuevo);
    });
  }

  function watchBar() {
    if (typeof MutationObserver === "undefined") return;
    new MutationObserver(function () {
      if (!document.getElementById("pestana-topbar")) injectBar();
      fixMail();
    }).observe(document.body, { childList: true });
  }

  injectBar();
  fixMail();
  document.addEventListener("DOMContentLoaded", function () {
    injectBar();
    fixMail();
    watchBar();
  });
  setTimeout(function () { injectBar(); fixMail(); }, 300);
  setTimeout(function () { injectBar(); fixMail(); }, 1000);
  setTimeout(function () { injectBar(); fixMail(); }, 2500);

})();
