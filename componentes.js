/**
 * componentes.js
 * Biblioteca de componentes de interface: dados + renderização,
 * busca por texto e filtro por categoria, e alternância
 * "Visualização / Código" em cada cartão.
 */

const CATEGORIAS_COMPONENTES = [
  { id: "todos", nome: "Todos" },
  { id: "estrutura", nome: "Estrutura" },
  { id: "navegacao", nome: "Navegação" },
  { id: "inputs", nome: "Inputs" },
  { id: "feedback", nome: "Feedback" },
  { id: "conteudo", nome: "Conteúdo" },
];

const COMPONENTES = [
  {
    id: "botoes",
    categoria: "inputs",
    titulo: "Botões",
    descricao: "Variações de botão para ações primárias, secundárias e destrutivas.",
    demo: `
      <button class="btn btn-primary btn-sm">Salvar</button>
      <button class="btn btn-secondary btn-sm">Cancelar</button>
      <button class="btn btn-danger btn-sm">Excluir</button>
    `,
    codigo: `<button class="btn btn-primary">Salvar</button>
<button class="btn btn-secondary">Cancelar</button>
<button class="btn btn-danger">Excluir</button>`,
  },
  {
    id: "botao-icone",
    categoria: "inputs",
    titulo: "Botão de ícone",
    descricao: "Ação compacta representada apenas por um ícone, com rótulo acessível.",
    demo: `<button class="btn-icon" aria-label="Curtir">♡</button>
           <button class="btn-icon" aria-label="Compartilhar">↗</button>`,
    codigo: `<button class="btn-icon" aria-label="Curtir">♡</button>`,
  },
  {
    id: "badge",
    categoria: "conteudo",
    titulo: "Badge",
    descricao: "Rótulo curto para status, categorias ou contadores.",
    demo: `<span class="mini-badge">● Ativo</span> <span class="mini-badge">Novo</span>`,
    codigo: `<span class="badge">● Ativo</span>`,
  },
  {
    id: "avatar",
    categoria: "conteudo",
    titulo: "Avatar",
    descricao: "Representação visual de um usuário, com iniciais como alternativa a uma foto.",
    demo: `<div class="avatar">CA</div>`,
    codigo: `<div class="avatar">CA</div>`,
  },
  {
    id: "card",
    categoria: "estrutura",
    titulo: "Card",
    descricao: "Contêiner que agrupa conteúdo relacionado com uma borda e elevação sutil.",
    demo: `<div class="mini-card"><h4>Título do card</h4><p>Texto de apoio explicando o conteúdo.</p></div>`,
    codigo: `<div class="card">
  <h4>Título do card</h4>
  <p>Texto de apoio.</p>
</div>`,
  },
  {
    id: "alerta",
    categoria: "feedback",
    titulo: "Alerta / Banner",
    descricao: "Mensagem de destaque para avisos, erros ou confirmações no fluxo da página.",
    demo: `<div class="mini-alert">ℹ️ Suas alterações foram salvas com sucesso.</div>`,
    codigo: `<div class="alert alert-info">
  Suas alterações foram salvas.
</div>`,
  },
  {
    id: "toast",
    categoria: "feedback",
    titulo: "Toast / Snackbar",
    descricao: "Notificação temporária que aparece sobre a interface e desaparece sozinha.",
    demo: `<div class="toast-mini">✅ Item adicionado ao carrinho</div>`,
    codigo: `<div class="toast toast-success">
  Item adicionado ao carrinho
</div>`,
  },
  {
    id: "progress",
    categoria: "feedback",
    titulo: "Barra de progresso",
    descricao: "Indica visualmente o avanço de uma tarefa ou upload.",
    demo: `<div class="progress-track"><div class="progress-fill"></div></div>`,
    codigo: `<div class="progress-track">
  <div class="progress-fill" style="width: 62%"></div>
</div>`,
  },
  {
    id: "spinner",
    categoria: "feedback",
    titulo: "Spinner",
    descricao: "Indicador de carregamento para operações sem duração definida.",
    demo: `<div class="spinner"></div>`,
    codigo: `<div class="spinner"></div>`,
  },
  {
    id: "skeleton",
    categoria: "feedback",
    titulo: "Skeleton loader",
    descricao: "Placeholder animado que antecipa o formato do conteúdo enquanto ele carrega.",
    demo: `<div style="width:100%"><div class="skeleton-line" style="width:80%"></div><div class="skeleton-line" style="width:55%"></div></div>`,
    codigo: `<div class="skeleton-line"></div>
<div class="skeleton-line"></div>`,
  },
  {
    id: "switch",
    categoria: "inputs",
    titulo: "Switch (toggle)",
    descricao: "Alterna entre dois estados, como ligado/desligado, com resposta imediata.",
    demo: `<label class="switch"><input type="checkbox" checked><span class="track"></span></label>`,
    codigo: `<label class="switch">
  <input type="checkbox">
  <span class="track"></span>
</label>`,
  },
  {
    id: "checkbox",
    categoria: "inputs",
    titulo: "Checkbox",
    descricao: "Seleção de uma ou mais opções independentes.",
    demo: `<label class="checkbox-row"><input type="checkbox" checked> Lembrar de mim</label>`,
    codigo: `<label>
  <input type="checkbox"> Lembrar de mim
</label>`,
  },
  {
    id: "radio",
    categoria: "inputs",
    titulo: "Radio button",
    descricao: "Seleção única entre um grupo de opções mutuamente exclusivas.",
    demo: `<label class="radio-row"><input type="radio" name="r1" checked> Mensal</label> <label class="radio-row"><input type="radio" name="r1"> Anual</label>`,
    codigo: `<input type="radio" name="plano" checked> Mensal
<input type="radio" name="plano"> Anual`,
  },
  {
    id: "input-texto",
    categoria: "inputs",
    titulo: "Campo de texto",
    descricao: "Entrada de texto simples de uma linha, com rótulo e placeholder.",
    demo: `<input class="input-mini" type="text" placeholder="seu@email.com">`,
    codigo: `<input type="text" placeholder="seu@email.com">`,
  },
  {
    id: "textarea",
    categoria: "inputs",
    titulo: "Textarea",
    descricao: "Entrada de texto de múltiplas linhas para conteúdos mais longos.",
    demo: `<textarea class="textarea-mini" rows="2" placeholder="Escreva um comentário..."></textarea>`,
    codigo: `<textarea rows="3" placeholder="Escreva..."></textarea>`,
  },
  {
    id: "select",
    categoria: "inputs",
    titulo: "Select",
    descricao: "Lista suspensa para escolher uma opção entre várias predefinidas.",
    demo: `<select class="select-mini"><option>Minas Gerais</option><option>São Paulo</option></select>`,
    codigo: `<select>
  <option>Minas Gerais</option>
  <option>São Paulo</option>
</select>`,
  },
  {
    id: "slider",
    categoria: "inputs",
    titulo: "Slider (range)",
    descricao: "Seleção de um valor numérico dentro de um intervalo, por arraste.",
    demo: `<input class="slider-mini" type="range" min="0" max="100" value="40">`,
    codigo: `<input type="range" min="0" max="100" value="40">`,
  },
  {
    id: "rating",
    categoria: "inputs",
    titulo: "Rating (estrelas)",
    descricao: "Avaliação por estrelas, comum em produtos e serviços.",
    demo: `<div class="rating-mini">★★★★☆</div>`,
    codigo: `<div class="rating">★★★★☆</div>`,
  },
  {
    id: "tooltip",
    categoria: "feedback",
    titulo: "Tooltip",
    descricao: "Texto de apoio que aparece ao passar o cursor sobre um elemento.",
    demo: `<span class="tooltip-demo"><button class="btn btn-secondary btn-sm">Passe o mouse</button><span class="bubble">Isto é um tooltip</span></span>`,
    codigo: `<span class="tooltip">
  <button>Passe o mouse</button>
  <span class="bubble">Texto de apoio</span>
</span>`,
  },
  {
    id: "modal",
    categoria: "feedback",
    titulo: "Modal",
    descricao: "Janela sobreposta que exige atenção antes de voltar ao fluxo principal.",
    demo: `<div style="position:relative;width:100%;height:100px;"><div class="modal-backdrop-mini"><div class="modal-mini"><h4>Excluir item?</h4><p>Essa ação não pode ser desfeita.</p><button class="btn btn-danger btn-sm">Excluir</button></div></div></div>`,
    codigo: `<div class="modal">
  <h4>Excluir item?</h4>
  <p>Essa ação não pode ser desfeita.</p>
</div>`,
  },
  {
    id: "accordion",
    categoria: "estrutura",
    titulo: "Accordion",
    descricao: "Painéis que expandem e recolhem conteúdo, economizando espaço vertical.",
    demo: `<div class="accordion-mini">
      <div class="acc-item open"><button>O que é um design system? <span>−</span></button><div class="acc-panel"><p>Um conjunto de padrões e componentes reutilizáveis.</p></div></div>
      <div class="acc-item"><button>Como instalar? <span>+</span></button><div class="acc-panel"><p>Basta importar o CSS e o JS do projeto.</p></div></div>
    </div>`,
    codigo: `<div class="accordion">
  <button>Pergunta</button>
  <div class="panel">Resposta</div>
</div>`,
  },
  {
    id: "tabs",
    categoria: "navegacao",
    titulo: "Tabs (abas)",
    descricao: "Organiza conteúdos relacionados em painéis alternáveis, sem trocar de página.",
    demo: `<div class="tabs-mini"><button class="active">Perfil</button><button>Segurança</button><button>Cobrança</button></div>`,
    codigo: `<div class="tabs">
  <button class="active">Perfil</button>
  <button>Segurança</button>
</div>`,
  },
  {
    id: "breadcrumb",
    categoria: "navegacao",
    titulo: "Breadcrumb",
    descricao: "Trilha de navegação que mostra a localização atual dentro da hierarquia do site.",
    demo: `<div class="breadcrumb-mini"><a href="#">Início</a> / <a href="#">Cursos</a> / <span>Tema 07</span></div>`,
    codigo: `<nav class="breadcrumb">
  Início / Cursos / Tema 07
</nav>`,
  },
  {
    id: "pagination",
    categoria: "navegacao",
    titulo: "Paginação",
    descricao: "Divide grandes conjuntos de conteúdo em páginas navegáveis.",
    demo: `<div class="pagination-mini"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>›</button></div>`,
    codigo: `<div class="pagination">
  <button class="active">1</button>
  <button>2</button>
</div>`,
  },
  {
    id: "navbar",
    categoria: "navegacao",
    titulo: "Navbar",
    descricao: "Barra de navegação principal, fixa no topo da página.",
    demo: `<div class="navbar-mini"><strong>Marca</strong><span class="links">Início · Sobre · Contato</span></div>`,
    codigo: `<nav class="navbar">
  <strong>Marca</strong>
  <div class="links">Início · Sobre</div>
</nav>`,
  },
  {
    id: "stepper",
    categoria: "navegacao",
    titulo: "Stepper",
    descricao: "Mostra o progresso do usuário em um processo de várias etapas.",
    demo: `<div class="stepper-mini"><div class="dot done">1</div><div class="line"></div><div class="dot done">2</div><div class="line"></div><div class="dot">3</div></div>`,
    codigo: `<div class="stepper">
  <span class="dot done">1</span>
  <span class="dot">2</span>
</div>`,
  },
  {
    id: "drawer",
    categoria: "navegacao",
    titulo: "Drawer (gaveta)",
    descricao: "Painel lateral que desliza sobre o conteúdo, usado em menus e filtros.",
    demo: `<div style="position:relative;width:100%;height:100px;"><div class="drawer-mini">Menu<br>lateral</div></div>`,
    codigo: `<aside class="drawer">
  Menu lateral
</aside>`,
  },
  {
    id: "tabela",
    categoria: "conteudo",
    titulo: "Tabela",
    descricao: "Exibe dados estruturados em linhas e colunas.",
    demo: `<table class="table-mini"><tr><th>Nome</th><th>Status</th></tr><tr><td>Ana</td><td>Ativa</td></tr><tr><td>Bruno</td><td>Pendente</td></tr></table>`,
    codigo: `<table>
  <tr><th>Nome</th><th>Status</th></tr>
  <tr><td>Ana</td><td>Ativa</td></tr>
</table>`,
  },
  {
    id: "divider",
    categoria: "estrutura",
    titulo: "Divider",
    descricao: "Linha fina que separa visualmente seções ou grupos de conteúdo.",
    demo: `<div style="width:100%;border-top:1px solid var(--border)"></div>`,
    codigo: `<hr class="divider">`,
  },
];

function renderizarComponentes(lista) {
  const grid = document.getElementById("componentes-grid");
  const contador = document.getElementById("resultado-contador");
  grid.innerHTML = "";

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="glyph">🔍</div>
        <p>Nenhum componente encontrado para essa busca.</p>
      </div>`;
    contador.textContent = "0 componentes encontrados";
    return;
  }

  contador.textContent = `${lista.length} componente${lista.length > 1 ? "s" : ""} encontrado${lista.length > 1 ? "s" : ""}`;

  lista.forEach((comp) => {
    const card = document.createElement("article");
    card.className = "demo-card";
    card.innerHTML = `
      <div class="demo-card-head">
        <span class="cat">${comp.categoria}</span>
        <h3>${comp.titulo}</h3>
        <p>${comp.descricao}</p>
      </div>
      <div class="demo-tabs">
        <button class="demo-tab-btn active" data-view="preview">Visualização</button>
        <button class="demo-tab-btn" data-view="code">Código</button>
      </div>
      <div class="demo-stage" data-panel="preview">${comp.demo}</div>
      <pre class="demo-code" data-panel="code">${comp.codigo.replace(/</g, "&lt;")}</pre>
    `;

    const [previewBtn, codeBtn] = card.querySelectorAll(".demo-tab-btn");
    const previewPanel = card.querySelector('[data-panel="preview"]');
    const codePanel = card.querySelector('[data-panel="code"]');

    previewBtn.addEventListener("click", () => {
      previewBtn.classList.add("active");
      codeBtn.classList.remove("active");
      previewPanel.classList.remove("hidden-panel");
      codePanel.classList.remove("visible");
    });
    codeBtn.addEventListener("click", () => {
      codeBtn.classList.add("active");
      previewBtn.classList.remove("active");
      previewPanel.classList.add("hidden-panel");
      codePanel.classList.add("visible");
    });

    grid.appendChild(card);
  });

  // Interações internas dos mini-componentes recém-inseridos
  grid.querySelectorAll(".acc-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".acc-item").classList.toggle("open");
    });
  });
  grid.querySelectorAll(".tabs-mini button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function aplicarFiltros() {
  const termo = document.getElementById("busca-input").value.trim().toLowerCase();
  const categoriaAtiva = document.querySelector(".filter-chips .chip.active").dataset.categoria;

  const filtrados = COMPONENTES.filter((c) => {
    const bateCategoria = categoriaAtiva === "todos" || c.categoria === categoriaAtiva;
    const bateTexto =
      c.titulo.toLowerCase().includes(termo) || c.descricao.toLowerCase().includes(termo);
    return bateCategoria && bateTexto;
  });

  renderizarComponentes(filtrados);
}

document.addEventListener("DOMContentLoaded", () => {
  const chipsContainer = document.getElementById("filtro-categorias");
  CATEGORIAS_COMPONENTES.forEach((cat, i) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (i === 0 ? " active" : "");
    chip.textContent = cat.nome;
    chip.dataset.categoria = cat.id;
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chips .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      aplicarFiltros();
    });
    chipsContainer.appendChild(chip);
  });

  document.getElementById("busca-input").addEventListener("input", aplicarFiltros);

  renderizarComponentes(COMPONENTES);
});
