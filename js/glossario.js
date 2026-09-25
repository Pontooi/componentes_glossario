/**
 * glossario.js
 * Glossário visual de Design Systems & UI: dados + renderização,
 * com busca por texto e filtro por categoria.
 */

const CATEGORIAS_GLOSSARIO = [
  { id: "todos", nome: "Todos" },
  { id: "fundamentos", nome: "Fundamentos" },
  { id: "estrutura", nome: "Estrutura" },
  { id: "navegacao", nome: "Navegação" },
  { id: "inputs", nome: "Inputs" },
  { id: "feedback", nome: "Feedback" },
  { id: "conteudo", nome: "Conteúdo" },
];

const TERMOS = [
  // Fundamentos
  { termo: "Design System", categoria: "fundamentos", definicao: "Conjunto documentado de componentes, tokens e regras de uso que garante consistência visual e funcional entre telas e produtos.", exemplo: "Ex.: Material Design, Ant Design, Carbon." },
  { termo: "Design Token", categoria: "fundamentos", definicao: "Menor unidade de decisão visual de um design system — cor, espaçamento, raio de borda — armazenada como variável reutilizável.", exemplo: "Ex.: --color-accent, --radius-md." },
  { termo: "Atomic Design", categoria: "fundamentos", definicao: "Metodologia de Brad Frost que organiza a interface em cinco níveis: átomos, moléculas, organismos, templates e páginas.", exemplo: "Ex.: um botão (átomo) vira parte de um formulário (organismo)." },
  { termo: "Átomo", categoria: "fundamentos", definicao: "Menor elemento de interface, indivisível sem perder sua função — um botão, um input, um rótulo.", exemplo: "Ex.: <input>, <label>, <button>." },
  { termo: "Molécula", categoria: "fundamentos", definicao: "Combinação de átomos que formam uma unidade funcional simples, como um campo de busca com botão.", exemplo: "Ex.: input + botão de lupa." },
  { termo: "Organismo", categoria: "fundamentos", definicao: "Agrupamento de moléculas e átomos que forma uma seção completa e reconhecível da interface.", exemplo: "Ex.: cabeçalho com logo, busca e menu." },
  { termo: "Grid system", categoria: "fundamentos", definicao: "Estrutura de colunas e margens que organiza o layout e garante alinhamento consistente entre elementos.", exemplo: "Ex.: grid de 12 colunas." },
  { termo: "Hierarquia visual", categoria: "fundamentos", definicao: "Ordem de importância dada aos elementos por meio de tamanho, cor, contraste e posição, guiando o olhar do usuário.", exemplo: "Ex.: título maior que o texto de apoio." },
  { termo: "Affordance", categoria: "fundamentos", definicao: "Qualidade de um elemento que sugere, pela própria aparência, como ele deve ser usado.", exemplo: "Ex.: um botão com sombra parece \"clicável\"." },
  { termo: "Responsividade", categoria: "fundamentos", definicao: "Capacidade de uma interface se adaptar a diferentes tamanhos de tela e dispositivos.", exemplo: "Ex.: menu que vira gaveta no celular." },
  { termo: "Acessibilidade (a11y)", categoria: "fundamentos", definicao: "Conjunto de práticas que garante que a interface possa ser usada por pessoas com diferentes capacidades e tecnologias assistivas.", exemplo: "Ex.: contraste adequado, navegação por teclado." },
  { termo: "Dark mode", categoria: "fundamentos", definicao: "Tema visual com fundo escuro e texto claro, reduzindo o brilho emitido pela tela.", exemplo: "Ex.: alternância entre tema claro e escuro." },

  // Estrutura
  { termo: "Container", categoria: "estrutura", definicao: "Elemento que envolve e limita a largura do conteúdo, centralizando-o na página.", exemplo: "Ex.: <div class=\"container\">." },
  { termo: "Card", categoria: "estrutura", definicao: "Bloco de conteúdo autocontido, geralmente com borda ou sombra, usado para agrupar informações relacionadas.", exemplo: "Ex.: card de produto em uma loja." },
  { termo: "Wrapper", categoria: "estrutura", definicao: "Elemento que \"embrulha\" outro apenas para fins de estilo ou posicionamento, sem significado semântico próprio.", exemplo: "Ex.: <div class=\"wrapper\">." },
  { termo: "Section", categoria: "estrutura", definicao: "Divisão temática de uma página, geralmente com seu próprio título e propósito.", exemplo: "Ex.: seção \"Depoimentos\" de uma landing page." },
  { termo: "Divider", categoria: "estrutura", definicao: "Linha ou espaço usado para separar visualmente grupos de conteúdo.", exemplo: "Ex.: <hr> entre dois blocos." },
  { termo: "Accordion", categoria: "estrutura", definicao: "Componente que expande e recolhe painéis de conteúdo, economizando espaço vertical.", exemplo: "Ex.: seção de perguntas frequentes." },
  { termo: "Sidebar", categoria: "estrutura", definicao: "Painel lateral fixo, geralmente usado para navegação ou filtros.", exemplo: "Ex.: menu lateral de um painel administrativo." },

  // Navegação
  { termo: "Navbar", categoria: "navegacao", definicao: "Barra de navegação principal do site, normalmente fixa no topo da página.", exemplo: "Ex.: logo + links de menu." },
  { termo: "Breadcrumb", categoria: "navegacao", definicao: "Trilha de links que mostra o caminho percorrido até a página atual dentro da hierarquia do site.", exemplo: "Ex.: Início / Produtos / Camisetas." },
  { termo: "Tabs (abas)", categoria: "navegacao", definicao: "Permitem alternar entre diferentes conteúdos relacionados sem sair da página.", exemplo: "Ex.: abas \"Descrição\" e \"Avaliações\"." },
  { termo: "Paginação", categoria: "navegacao", definicao: "Divide uma lista longa de itens em páginas menores e navegáveis.", exemplo: "Ex.: 1, 2, 3 ... 10 no rodapé de uma lista." },
  { termo: "Drawer", categoria: "navegacao", definicao: "Painel que desliza a partir de uma borda da tela, sobrepondo o conteúdo, comum em menus mobile.", exemplo: "Ex.: menu hambúrguer que abre da lateral." },
  { termo: "Stepper", categoria: "navegacao", definicao: "Indica o progresso do usuário em um processo dividido em etapas sequenciais.", exemplo: "Ex.: checkout em 3 passos." },
  { termo: "Menu hambúrguer", categoria: "navegacao", definicao: "Ícone de três linhas que, ao ser clicado, revela um menu de navegação escondido — comum em telas pequenas.", exemplo: "Ex.: ☰ no canto superior." },
  { termo: "Back to top", categoria: "navegacao", definicao: "Botão flutuante que leva o usuário de volta ao topo da página após rolagem.", exemplo: "Ex.: botão ⬆️ no canto inferior direito." },

  // Inputs
  { termo: "Input", categoria: "inputs", definicao: "Campo onde o usuário digita informações, como texto, número ou senha.", exemplo: "Ex.: <input type=\"email\">." },
  { termo: "Textarea", categoria: "inputs", definicao: "Campo de texto de múltiplas linhas, usado para conteúdos mais longos.", exemplo: "Ex.: campo de comentário." },
  { termo: "Select / Dropdown", categoria: "inputs", definicao: "Lista suspensa que permite escolher uma opção entre várias predefinidas.", exemplo: "Ex.: seletor de estado ou país." },
  { termo: "Checkbox", categoria: "inputs", definicao: "Controle que permite marcar uma ou mais opções de forma independente.", exemplo: "Ex.: \"Aceito os termos de uso\"." },
  { termo: "Radio button", categoria: "inputs", definicao: "Controle que permite escolher apenas uma opção dentro de um grupo mutuamente exclusivo.", exemplo: "Ex.: escolha de forma de pagamento." },
  { termo: "Switch (toggle)", categoria: "inputs", definicao: "Controle deslizante que alterna entre dois estados, como ligado e desligado.", exemplo: "Ex.: ativar notificações." },
  { termo: "Slider (range)", categoria: "inputs", definicao: "Permite selecionar um valor numérico dentro de um intervalo, arrastando um controle.", exemplo: "Ex.: filtro de faixa de preço." },
  { termo: "Placeholder", categoria: "inputs", definicao: "Texto de exemplo exibido dentro de um campo vazio, que desaparece ao digitar.", exemplo: "Ex.: \"seu@email.com\" em um campo de e-mail." },
  { termo: "Validação de formulário", categoria: "inputs", definicao: "Verificação de que os dados inseridos atendem aos critérios esperados antes do envio.", exemplo: "Ex.: aviso de \"e-mail inválido\"." },

  // Feedback
  { termo: "Alert / Banner", categoria: "feedback", definicao: "Mensagem de destaque usada para comunicar avisos, erros, sucesso ou informações importantes.", exemplo: "Ex.: \"Alterações salvas com sucesso\"." },
  { termo: "Toast / Snackbar", categoria: "feedback", definicao: "Notificação temporária e discreta que aparece sobre a interface e desaparece automaticamente.", exemplo: "Ex.: \"Item adicionado ao carrinho\"." },
  { termo: "Modal", categoria: "feedback", definicao: "Janela sobreposta que bloqueia a interação com o restante da página até ser fechada, usada para decisões importantes.", exemplo: "Ex.: confirmação antes de excluir um item." },
  { termo: "Tooltip", categoria: "feedback", definicao: "Texto de apoio breve que aparece ao passar o cursor ou focar em um elemento.", exemplo: "Ex.: explicação de um ícone." },
  { termo: "Skeleton loader", categoria: "feedback", definicao: "Placeholder animado que imita o formato do conteúdo final enquanto ele ainda está carregando.", exemplo: "Ex.: retângulos cinza pulsantes no lugar de texto." },
  { termo: "Spinner", categoria: "feedback", definicao: "Indicador visual de carregamento para operações sem duração ou progresso definido.", exemplo: "Ex.: círculo girando durante um envio." },
  { termo: "Progress bar", categoria: "feedback", definicao: "Barra que indica visualmente o avanço de uma tarefa com duração ou etapas conhecidas.", exemplo: "Ex.: barra de upload de arquivo." },
  { termo: "Estado vazio (empty state)", categoria: "feedback", definicao: "Tela ou trecho exibido quando não há conteúdo para mostrar, orientando o próximo passo do usuário.", exemplo: "Ex.: \"Nenhum resultado encontrado\"." },

  // Conteúdo
  { termo: "Badge", categoria: "conteudo", definicao: "Rótulo pequeno e destacado usado para indicar status, categoria ou contagem.", exemplo: "Ex.: \"Novo\", contador de notificações." },
  { termo: "Chip / Tag", categoria: "conteudo", definicao: "Elemento compacto que representa uma opção, filtro ou atributo selecionável ou removível.", exemplo: "Ex.: tags de filtro em uma busca." },
  { termo: "Avatar", categoria: "conteudo", definicao: "Representação visual de um usuário, geralmente uma foto ou as iniciais do nome.", exemplo: "Ex.: foto de perfil em um comentário." },
  { termo: "Tabela", categoria: "conteudo", definicao: "Estrutura que organiza dados em linhas e colunas para facilitar comparação e leitura.", exemplo: "Ex.: lista de usuários com nome e status." },
  { termo: "Rating (avaliação)", categoria: "conteudo", definicao: "Representação visual de uma nota ou avaliação, geralmente por estrelas.", exemplo: "Ex.: ★★★★☆ em um produto." },
  { termo: "Lista", categoria: "conteudo", definicao: "Sequência vertical de itens relacionados, ordenados ou não.", exemplo: "Ex.: lista de tarefas." },
];

function renderizarGlossario(lista) {
  const container = document.getElementById("glossario-lista");
  const contador = document.getElementById("resultado-contador");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="glyph">📖</div>
        <p>Nenhum termo encontrado para essa busca.</p>
      </div>`;
    contador.textContent = "0 termos encontrados";
    return;
  }

  contador.textContent = `${lista.length} termo${lista.length > 1 ? "s" : ""} encontrado${lista.length > 1 ? "s" : ""}`;

  lista.forEach((t) => {
    const row = document.createElement("div");
    row.className = "term-row";
    row.innerHTML = `
      <div class="term-name">
        <strong>${t.termo}</strong>
        <span class="cat">${t.categoria}</span>
      </div>
      <div class="term-def">
        <p>${t.definicao}</p>
        <span class="example">${t.exemplo}</span>
      </div>
    `;
    container.appendChild(row);
  });
}

function aplicarFiltrosGlossario() {
  const termoBusca = document.getElementById("busca-input").value.trim().toLowerCase();
  const categoriaAtiva = document.querySelector(".filter-chips .chip.active").dataset.categoria;

  const filtrados = TERMOS.filter((t) => {
    const bateCategoria = categoriaAtiva === "todos" || t.categoria === categoriaAtiva;
    const bateTexto =
      t.termo.toLowerCase().includes(termoBusca) || t.definicao.toLowerCase().includes(termoBusca);
    return bateCategoria && bateTexto;
  });

  renderizarGlossario(filtrados);
}

document.addEventListener("DOMContentLoaded", () => {
  const chipsContainer = document.getElementById("filtro-categorias");
  CATEGORIAS_GLOSSARIO.forEach((cat, i) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (i === 0 ? " active" : "");
    chip.textContent = cat.nome;
    chip.dataset.categoria = cat.id;
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chips .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      aplicarFiltrosGlossario();
    });
    chipsContainer.appendChild(chip);
  });

  document.getElementById("busca-input").addEventListener("input", aplicarFiltrosGlossario);

  renderizarGlossario(TERMOS);
});
