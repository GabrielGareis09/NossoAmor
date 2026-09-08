# Nosso Amor ❤️

Site especial feito com carinho para o aniversário da Laura.

Uma história de amor transformada em um livro digital interativo + galeria de momentos.

---

## 📁 Estrutura do Projeto
/
├── index.html          → Página de login
├── historia.html       → Livro interativo com a história
├── galeria.html        → Galeria de fotos
├── index.css
├── historia.css
├── galeria.css
├── index.js
├── historia.js
├── galeria.js
└── imagem/             → Pasta com todas as fotos
├── 1.jpg
├── 2.jpg
├── ...
└── 31.jpg
text> **Importante:**  
> Todos os arquivos HTML, CSS e JS estão na **raiz** do repositório.  
> Apenas as fotos ficam dentro da pasta `imagem`.  
> Essa estrutura foi feita assim para funcionar corretamente no **GitHub Pages**.

---

## 🚀 Como funciona

1. **Login** (`index.html`)  
   Digite a senha secreta (`16`) para entrar.

2. **Livro** (`historia.html`)  
   - Capa do livro  
   - Páginas que viram  
   - História completa dividida em capítulos  
   - No final: opções de ler novamente, ir para a galeria ou voltar ao início

3. **Galeria** (`galeria.html`)  
   - Grade com todas as fotos  
   - Clique para abrir em tela cheia (lightbox)  
   - Navegação com setas ou teclado

---

## 📸 Adicionando fotos

1. Coloque as fotos dentro da pasta `imagem`
2. Abra o arquivo `galeria.js`
3. Atualize a lista `photos` com o nome das imagens:

```js
const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
    // adicione quantas quiser
];
