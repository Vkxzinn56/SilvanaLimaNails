# 💅 Silvana Lima Nails — Landing Page

Landing Page profissional para divulgação e venda de **cursos presenciais de unha**.

## 🚀 Como usar

Abra o `index.html` no navegador diretamente (não precisa de servidor).

## 📁 Estrutura de arquivos

```
SilvanaLimaNails/
├── index.html          → Página principal (todo o conteúdo)
├── css/
│   └── style.css       → Estilos (cores, fontes, layout)
├── js/
│   └── main.js         → Interatividade (menu, formulário)
├── assets/             → Imagens e arquivos estáticos
│   ├── logo.svg
│   ├── hero-bg.jpg
│   ├── about.jpg
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   └── testimonial-3.jpg
└── README.md           → Este arquivo
```

## ✏️ Como editar

### 1. Trocar textos e fotos
Abra o **`index.html`** e procure pelos comentários `ALTERE AQUI`. Cada bloco editável está sinalizado:

- **Logo**: linha 44 (`assets/logo.svg`)
- **Título do Hero**: linha 68
- **Sobre (texto)**: linhas 88–99
- **Cursos**: linhas 115–180 (cards individuais com nome, descrição, preço)
- **Depoimentos**: linhas 188–228
- **Contato**: linhas 240–280 (endereço, WhatsApp, email, horários)
- **Redes sociais**: linhas 298–305

### 2. Trocar cores e fontes
Abra o **`css/style.css`** e edite as variáveis no bloco `:root` (linha 12 em diante):

```css
--color-primary: #c17a9b;   /* cor principal */
--color-primary-dark: ...   /* hover */
--font-heading: ...         /* fonte dos títulos */
--font-body: ...            /* fonte dos textos */
```

### 3. Comportamento do formulário
Abra o **`js/main.js`** e procure por `EDITÁVEL` (linha 37). Altere `FORM_ACTION` para a URL do seu serviço de envio (ex: Formspree, StaticForms, backend próprio).

### 4. Imagens
Substitua os arquivos placeholder na pasta `assets/` pelos arquivos reais (mantendo o mesmo nome ou atualizando o `src` no HTML).

## 📱 Responsivo
A página se adapta automaticamente a celulares e tablets. Os breakpoints estão no final do `style.css`.

## 💬 Contato / WhatsApp
O número do WhatsApp aparece em 3 lugares no HTML (herói, contato e footer). Atualize todos com o mesmo número real.
