import page from 'page';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/style.css';


function loadPage(pageName) {
  return async () => {
    try {
      const response = await fetch(`/pages/${pageName}/${pageName}.html`);
      const html = await response.text();
      document.getElementById('app').innerHTML = html;

      // Carregar o CSS específico da página dinamicamente
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `/pages/${pageName}/${pageName}.css`;
      document.head.appendChild(link);

      // Carregar o script específico da página como módulo
      import(`./pages/${pageName}/${pageName}.js`).then((module) => {
        if (module && module.default && typeof module.default === 'function') {
          module.default();
        }
      }).catch((error) => {
        console.error(`Erro ao carregar o script da página ${pageName}:`, error);
      });
    } catch (error) {
      document.getElementById('app').innerHTML += '<h1>404 Not Found</h1><p>Página não encontrada.</p>';
    }
  };
}

page('/', loadPage('home'));
page('/items', loadPage('items'));
page();
