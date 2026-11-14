/*!
 * SexyHint — footer compartilhado (Zoho Sites + Zoho Commerce)
 * Hospedado em: https://luigimacarini.github.io/sexyhint-footer/footer.js
 *
 * Como usar (cole no Footer Code / Code Snippet de cada aplicação):
 *
 *   No SITE (Zoho Sites):
 *     <div id="sh-footer" data-context="site"></div>
 *     <script src="https://luigimacarini.github.io/sexyhint-footer/footer.js" defer></script>
 *
 *   Na LOJA (Zoho Commerce):
 *     <div id="sh-footer" data-context="store"></div>
 *     <script src="https://luigimacarini.github.io/sexyhint-footer/footer.js" defer></script>
 *
 * QUAL MENU APARECE:
 *   O script olha o domínio da página (lista DOMINIOS abaixo):
 *     sexyhintwholesale.zohosites.com     -> menu do SITE
 *     sexyhintwholesale.zohoecommerce.com -> menu da LOJA
 *   Em outro domínio (editor/preview do Zoho, teste local), usa o data-context.
 *   Se nada bater, assume "site".
 *
 * Links com url vazia ("") NÃO aparecem — preencha quando a página existir.
 */
(function () {
  "use strict";

  /* ============================================================
   * 1. CONTEÚDO — edite só esta parte para atualizar os dois sites
   * ============================================================ */
  var BASE_URL = "https://luigimacarini.github.io/sexyhint-footer"; // onde este arquivo está hospedado
  var SITE_URL = "https://sexyhintwholesale.zohosites.com";     // Zoho Sites (aberto)
  var STORE_URL = "https://sexyhintwholesale.zohoecommerce.com"; // Zoho Commerce (privado)

  // Domínio -> qual menu mostrar. Se trocar para domínio próprio, adicione aqui.
  var DOMINIOS = {
    "sexyhintwholesale.zohosites.com": "site",
    "sexyhintwholesale.zohoecommerce.com": "store"
  };

  var CONTENT = {
    logo: {
      src: BASE_URL + "/logo.png",
      alt: "SexyHint"
    },
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    // Menu do SITE (Zoho Sites — aberto ao público)
    site: [
      {
        titulo: "Information",
        links: [
          { texto: "About Us", url: STORE_URL + "/about-us" },
          { texto: "Contact Us", url: SITE_URL + "/contact" },
          { texto: "Wholesale FAQ", url: STORE_URL + "/wholesale-faq" },
          { texto: "Shipping & Returns", url: STORE_URL + "/shipping-returns-1" },
          { texto: "Privacy Policy", url: STORE_URL + "/privacy-policy" }
        ]
      },
      {
        titulo: "Wholesale",
        links: [
          { texto: "Wholesale Application", url: SITE_URL + "/wholesale_application" }
        ]
      }
    ],

    // Menu da LOJA (Zoho Commerce — só e-mails autorizados)
    store: [
      {
        titulo: "Information",
        links: [
          { texto: "About Us", url: STORE_URL + "/about-us" },
          { texto: "Contact Us", url: STORE_URL + "/contact-us" },
          { texto: "Wholesale FAQ", url: STORE_URL + "/wholesale-faq" },
          { texto: "Shipping & Returns", url: STORE_URL + "/shipping-returns-1" },
          { texto: "Privacy Policy", url: STORE_URL + "/privacy-policy" }
        ]
      },
      {
        titulo: "Wholesale",
        links: [
          { texto: "Wholesale Application", url: STORE_URL + "/wholesale-application" },
          {
            texto: "Wholesale Terms & Conditions",
            url: STORE_URL + "/wholesale-terms-conditions",
            // Só aparece se o visitante CONSEGUIR abrir esta página.
            // O footer testa em segundo plano; quem decide o acesso é o Zoho
            // (página restrita a clientes logados/aprovados).
            soComAcesso: { titulo: "Wholesale Terms" } // texto que o <title> da página real contém
          }
        ]
      }
    ],

    sobre: {
      titulo: "About SexyHint",
      blocos: [
        "SexyHint<sup>®</sup> — Corporate Office",
        "500 8th Avenue, Ste.2060<br>Manhattan, New York, NY 10018",
        "Dixlog llc — Logistics Center",
        "1191 E Newport Center Dr.,<br>Ste.103 Deerfield Beach, FL 33442"
      ]
    }
  };

  /* ============================================================
   * 2. ESTILO
   * ============================================================ */
  var CSS =
    ".sh-footer{--sh-red:#d6201f;--sh-text:#111;--sh-line:#d9d9d9;" +
    "font-family:'Manrope','Montserrat',system-ui,-apple-system,'Segoe UI',Arial,sans-serif;" +
    "color:var(--sh-text);background:#fff;padding:56px 24px;box-sizing:border-box}" +
    ".sh-footer *{box-sizing:border-box}" +
    ".sh-footer [hidden]{display:none!important}" +
    ".sh-footer__inner{max-width:1200px;margin:0 auto;display:grid;" +
    "grid-template-columns:minmax(260px,1.3fr) 1fr 1fr 1fr;gap:0 40px}" +
    ".sh-footer__brand{padding-right:48px;border-right:1px solid var(--sh-line);text-align:center}" +
    ".sh-footer__brand img{max-width:200px;height:auto;margin:0 auto 20px;display:block}" +
    ".sh-footer__brand p{margin:0;text-align:justify;font-size:15px;line-height:1.45}" +
    ".sh-footer__col{padding-top:8px}" +
    ".sh-footer__col h4{margin:0 0 20px;font-size:24px;font-weight:700;line-height:1.2;color:var(--sh-text)}" +
    ".sh-footer__col ul{list-style:none;margin:0;padding:0}" +
    ".sh-footer__col li{margin:0 0 18px}" +
    ".sh-footer__col a{color:var(--sh-red);text-decoration:none;font-size:16px;line-height:1.4}" +
    ".sh-footer__col a:hover,.sh-footer__col a:focus-visible{text-decoration:underline}" +
    ".sh-footer__col p{margin:0 0 18px;font-size:16px;line-height:1.5}" +
    ".sh-footer__col sup{font-size:.6em}" +
    "@media (max-width:900px){.sh-footer__inner{grid-template-columns:1fr 1fr;gap:40px}" +
    ".sh-footer__brand{grid-column:1/-1;border-right:0;border-bottom:1px solid var(--sh-line);" +
    "padding:0 0 32px}}" +
    "@media (max-width:560px){.sh-footer__inner{grid-template-columns:1fr}" +
    ".sh-footer__col h4{font-size:20px}}";

  /* ============================================================
   * 3. MONTAGEM (não precisa mexer daqui pra baixo)
   * ============================================================ */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function montarHTML(contexto) {
    var html = '<footer class="sh-footer"><div class="sh-footer__inner">';

    html +=
      '<div class="sh-footer__brand">' +
      '<img src="' + esc(CONTENT.logo.src) + '" alt="' + esc(CONTENT.logo.alt) + '" loading="lazy">' +
      "<p>" + esc(CONTENT.descricao) + "</p></div>";

    CONTENT[contexto].forEach(function (col) {
      var links = col.links.filter(function (l) { return !!l.url; });
      if (!links.length) return;
      html += '<div class="sh-footer__col"><h4>' + esc(col.titulo) + "</h4><ul>";
      links.forEach(function (l) {
        var restrito = l.soComAcesso
          ? ' hidden data-sh-acesso="' + esc(l.soComAcesso.titulo) + '"'
          : "";
        html += "<li" + restrito + '><a href="' + esc(l.url) + '">' + esc(l.texto) + "</a></li>";
      });
      html += "</ul></div>";
    });

    // blocos do "About" usam HTML fixo escrito aqui (<br>, <sup>), não vem de usuário
    html += '<div class="sh-footer__col"><h4>' + esc(CONTENT.sobre.titulo) + "</h4>";
    CONTENT.sobre.blocos.forEach(function (b) { html += "<p>" + b + "</p>"; });
    html += "</div>";

    return html + "</div></footer>";
  }

  function injetarCSS() {
    if (document.getElementById("sh-footer-style")) return;
    var style = document.createElement("style");
    style.id = "sh-footer-style";
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  // 1º domínio da página; 2º data-context do <div>; senão "site".
  function detectarContexto(alvo) {
    var host = String(location.hostname || "").toLowerCase().replace(/^www\./, "");
    if (DOMINIOS[host]) return DOMINIOS[host];
    var ctx = (alvo.getAttribute("data-context") || "").toLowerCase();
    return ctx === "store" ? "store" : "site";
  }

  // Renderiza no alvo. Retorna true se encontrou o <div id="sh-footer">.
  function render() {
    var alvo = document.getElementById("sh-footer");
    if (!alvo) return false;
    if (alvo.getAttribute("data-sh-rendered") === "1") return true; // evita montar 2x
    var contexto = detectarContexto(alvo);
    injetarCSS();
    alvo.innerHTML = montarHTML(contexto);
    alvo.setAttribute("data-sh-rendered", "1");
    liberarRestritos(alvo);
    return true;
  }

  // Links restritos começam escondidos. Pede a página com os cookies do
  // visitante: se vier a página de verdade (não login/erro), mostra o link.
  function liberarRestritos(alvo) {
    if (!window.fetch) return;
    var itens = alvo.querySelectorAll("li[data-sh-acesso]");
    Array.prototype.forEach.call(itens, function (li) {
      var a = li.querySelector("a");
      var url = a && a.href;
      // só dá pra testar no mesmo domínio (cookies de login são da loja)
      if (!url || url.indexOf(location.origin + "/") !== 0) return;
      var esperado = li.getAttribute("data-sh-acesso").toLowerCase();
      fetch(url, { credentials: "same-origin", cache: "no-store" })
        .then(function (res) {
          if (!res.ok || res.redirected) return "";
          return res.text();
        })
        .then(function (html) {
          var m = /<title[^>]*>([^<]*)/i.exec(html || "");
          if (m && m[1].toLowerCase().indexOf(esperado) !== -1) li.hidden = false;
        })
        .catch(function () { /* sem acesso / offline: continua escondido */ });
    });
  }

  // O Zoho às vezes insere os blocos de código depois que o script já rodou.
  // Se o alvo ainda não existir, observa a página por até 15s até ele aparecer.
  function iniciar() {
    if (render() || !window.MutationObserver) return;
    var obs = new MutationObserver(function () {
      if (render()) obs.disconnect();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); }, 15000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
