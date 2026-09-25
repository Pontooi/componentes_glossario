/**
 * theme.js
 * Controla a alternância entre o tema escuro (padrão, tons de roxo)
 * e o tema claro. A escolha do usuário é salva no localStorage
 * e aplicada antes da renderização visível para evitar "flash" de tema errado.
 */

(function () {
  const STORAGE_KEY = "tema-preferido";

  function aplicarTema(tema) {
    if (tema === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function temaAtual() {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  }

  // Aplica imediatamente (chamado no <head>, ver comentário no HTML)
  aplicarTema(temaAtual());

  function alternarTema() {
    const novo = temaAtual() === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, novo);
    aplicarTema(novo);
    atualizarBotao();
  }

  function atualizarBotao() {
    const botao = document.getElementById("theme-toggle");
    if (!botao) return;
    const escuro = temaAtual() === "dark";
    botao.querySelector(".icon").textContent = escuro ? "🌙" : "☀️";
    botao.querySelector(".label").textContent = escuro ? "Escuro" : "Claro";
    botao.setAttribute("aria-pressed", String(!escuro));
  }

  document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("theme-toggle");
    if (botao) {
      botao.addEventListener("click", alternarTema);
      atualizarBotao();
    }

    // Botão "voltar ao topo"
    const topo = document.getElementById("back-to-top");
    if (topo) {
      window.addEventListener("scroll", function () {
        topo.classList.toggle("visible", window.scrollY > 480);
      });
      topo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
})();
