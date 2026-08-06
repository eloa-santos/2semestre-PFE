// Alternar Tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙 Modo Escuro' : '☀️ Modo Claro';
});

// Lista dos arquivos de posts
const postFiles = ['post1.md', 'post2.md', 'post3.md'];
let allPostsData = [];

// Função para calcular tempo estimado de leitura (baseado na média de 200 palavras/min)
function calculateReadTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min de leitura`;
}

// Extrair categoria do texto do post
function extractCategory(markdown) {
  const match = markdown.match(/Categoria:\s*([^\n|*]+)/i);
  return match ? match[1].trim() : 'Geral';
}

// Carregar todos os artigos
async function fetchPosts() {
  allPostsData = await Promise.all(postFiles.map(async (file) => {
    const response = await fetch(`./posts/${file}`);
    const rawContent = await response.text();
    const category = extractCategory(rawContent);
    const readTime = calculateReadTime(rawContent);
    return { file, rawContent, category, readTime };
  }));

  setupCategoryFilters();
  renderPosts(allPostsData);
}

// Configurar botões de categoria dinamicamente
function setupCategoryFilters() {
  const container = document.getElementById('category-filters');
  const categories = ['todas', ...new Set(allPostsData.map(p => p.category))];

  container.innerHTML = categories.map(cat => 
    `<button class="filter-btn ${cat === 'todas' ? 'active' : ''}" data-category="${cat}">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>`
  ).join('');

  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    filterPosts();
  });
}

// Renderizar posts na tela
function renderPosts(postsToRender) {
  const container = document.getElementById('posts-container');
  if (postsToRender.length === 0) {
    container.innerHTML = '<p>Nenhum artigo encontrado.</p>';
    return;
  }

  container.innerHTML = postsToRender.map(post => `
    <article class="post-card">
      <div class="post-meta">
        <span>🏷️ ${post.category}</span>
        <span>⏱️ ${post.readTime}</span>
      </div>
      <div>${marked.parse(post.rawContent)}</div>
      <div class="post-actions">
        <button class="btn-share" onclick="sharePost('${post.file}')">🔗 Copiar Link</button>
      </div>
    </article>
  `).join('');
}

// Filtrar por busca de texto e por categoria
function filterPosts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const selectedCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'todas';

  const filtered = allPostsData.filter(post => {
    const matchesSearch = post.rawContent.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'todas' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  renderPosts(filtered);
}

// Copiar link do artigo
function sharePost(filename) {
  navigator.clipboard.writeText(window.location.href);
  alert('Link do artigo copiado para a área de transferência!');
}

document.getElementById('search-input').addEventListener('input', filterPosts);
fetchPosts();