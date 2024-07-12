import Navigo from 'navigo';

const router = new Navigo('/');

async function loadPage(page) {
  try {
    const response = await fetch(`/pages/${page}.html`);
    const html = await response.text();
    document.getElementById('app').innerHTML = html;

    // Carrega o script específico da página como módulo
    import(`/scripts/${page}.js`).then((module) => {
      if (module && module.default && typeof module.default === 'function') {
        module.default();
      }
    }).catch((error) => {
      console.error(`Erro ao carregar o script da página ${page}:`, error);
    });
  } catch (error) {
    document.getElementById('app').innerHTML = '<h1>404 Not Found</h1><p>Página não encontrada.</p>';
  }
}

router.on('/', () => loadPage('home'));
router.on('/items', () => loadPage('items'));

router.resolve();
