# 🎨 Tema 07 — Componentes & Glossário de Design

Site de estudo composto por três páginas, criado a partir dos temas trabalhados em
`glossario_v3.html` (biblioteca de componentes) e `T7_glossario-design.html`
(glossário visual de design systems) do curso mob07.

> Este é o **README detalhado**. Para uma versão curta, veja [`README-RESUMO.md`](./README-RESUMO.md).

---

## 1. O que o projeto faz

O site tem três páginas, conectadas por um menu comum:

| Página | Arquivo | O que mostra |
|---|---|---|
| Início | `html/index.html` | Apresentação do projeto e atalhos para as outras duas páginas |
| Componentes | `html/componentes.html` | Biblioteca de componentes de interface (botões, cards, formulários, modais, etc.), cada um com uma **demonstração ao vivo** e o **código correspondente** |
| Glossário | `html/glossario.html` | Glossário visual de termos de Design Systems e UI, com definição curta e um exemplo de uso para cada termo |

Nas páginas de Componentes e Glossário existe:
- uma **barra de busca**, que filtra os itens por texto em tempo real;
- **filtros por categoria** (chips clicáveis: Fundamentos, Estrutura, Navegação, Inputs, Feedback, Conteúdo);
- um **contador de resultados**, que se atualiza a cada busca/filtro;
- uma **mensagem de estado vazio** quando nenhum item bate com a busca.

Em todas as páginas há também:
- um **botão de tema** no cabeçalho, para alternar entre escuro e claro;
- um **botão "voltar ao topo"**, que aparece ao rolar a página.

---

## 2. Estrutura de pastas

O projeto segue a separação pedida entre HTML, CSS e JavaScript:

```
projeto/
├── html/
│   ├── index.html          → página inicial
│   ├── componentes.html    → biblioteca de componentes
│   └── glossario.html      → glossário de design
├── css/
│   └── style.css           → todo o estilo visual do site (tema escuro/claro incluído)
├── js/
│   ├── theme.js             → alternância de tema claro/escuro + botão "voltar ao topo"
│   ├── componentes.js        → dados dos componentes + busca/filtro/renderização
│   └── glossario.js          → dados dos termos + busca/filtro/renderização
├── README.md                → este arquivo (detalhado)
└── README-RESUMO.md          → versão resumida
```

Cada página HTML referencia os arquivos com caminho relativo (`../css/style.css` e
`../js/...`), então a pasta `html/` precisa continuar ao lado das pastas `css/` e `js/`
para os links funcionarem.

---

## 3. Como abrir o site

Não é necessário instalar nada. Duas opções:

1. **Abrir direto no navegador**: dê duplo clique em `html/index.html`.
2. **Publicar no GitHub Pages** (mesmo modelo do curso): suba a pasta `projeto/` para
   um repositório e aponte o GitHub Pages para a raiz. Depois acesse
   `.../projeto/html/index.html`.

---

## 4. Detalhes técnicos

### 4.1 Tema claro/escuro (`css/style.css` + `js/theme.js`)

O tema é controlado por variáveis CSS (`:root`) e um atributo `data-theme` na tag
`<html>`:

- **Sem o atributo** → tema escuro (padrão), com fundo quase preto e tons de roxo
  como cor de destaque (`--accent`).
- **`data-theme="light"`** → sobrescreve as mesmas variáveis com uma paleta clara.

O arquivo `js/theme.js`:
- lê a preferência salva no `localStorage` (chave `tema-preferido`);
- aplica o tema **antes** da página aparecer (por isso existe um pequeno `<script>`
  no `<head>` de cada HTML — isso evita o "flash" de tema errado ao carregar a página);
- alterna o tema ao clicar no botão do cabeçalho e salva a nova escolha;
- controla também o botão flutuante "voltar ao topo".

Como o curso não trazia um botão de tema pronto nas páginas de referência, essa parte
foi criada especificamente para este projeto, seguindo o pedido de abrir sempre no
tema escuro em tons de roxo.

### 4.2 Biblioteca de componentes (`js/componentes.js`)

Os componentes ficam em um array de objetos (`COMPONENTES`), cada um com:
`id`, `categoria`, `titulo`, `descricao`, `demo` (HTML da demonstração) e `codigo`
(texto mostrado na aba "Código").

A função `renderizarComponentes()` desenha os cartões na tela; `aplicarFiltros()`
cruza o texto da busca com a categoria ativa e chama a renderização de novo. Cada
cartão tem duas abas (Visualização/Código) controladas por JavaScript puro, sem
bibliotecas externas.

### 4.3 Glossário (`js/glossario.js`)

Mesmo padrão do item anterior, mas com um array `TERMOS` (termo, categoria,
definição, exemplo) e uma renderização em lista (`renderizarGlossario()`), já que o
glossário não precisa de abas de código.

### 4.4 Tipografia

- **Fraunces** (serifada) para títulos — dá personalidade sem pesar a leitura.
- **Sora** para textos e interface.
- **IBM Plex Mono** para rótulos técnicos (categorias, trechos de código).

Todas carregadas via Google Fonts nos arquivos HTML.

---

## 5. Como adicionar novos itens

**Novo componente:** abra `js/componentes.js` e adicione um objeto ao array
`COMPONENTES`, seguindo o mesmo formato dos existentes (categoria precisa ser uma das
já cadastradas em `CATEGORIAS_COMPONENTES`).

**Novo termo do glossário:** abra `js/glossario.js` e adicione um objeto ao array
`TERMOS`, no mesmo formato.

Não é preciso mexer no HTML nem no CSS para isso — a renderização é automática.

---

## 6. Créditos

Projeto de estudo desenvolvido para a atividade do **Tema 07 (mob07)**, inspirado na
estrutura e nos temas das páginas `glossario_v3.html` e `T7_glossario-design.html`
do material do curso (almeida-cma.github.io).
