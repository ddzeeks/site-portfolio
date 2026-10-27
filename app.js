// Alternância de tema claro/escuro
// O tema inicial já é definido por um pequeno script no <head> do HTML
const raiz = document.documentElement;
const botaoTema = document.getElementById('botaoTema');
const iconeTema = botaoTema.querySelector('i');

function atualizarBotao(tema) {
    const escuro = tema === 'dark';
    iconeTema.className = escuro ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    botaoTema.setAttribute('aria-label', escuro ? 'Ativar modo claro' : 'Ativar modo escuro');
}

atualizarBotao(raiz.getAttribute('data-bs-theme'));

botaoTema.addEventListener('click', () => {
    const novoTema = raiz.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    raiz.setAttribute('data-bs-theme', novoTema);
    atualizarBotao(novoTema);
    try { localStorage.setItem('tema', novoTema); } catch (e) {}
});
