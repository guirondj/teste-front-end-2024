// Navegação entre vídeos e favoritos
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        window.location.href = `http://localhost:3001/${target}`;
    });
});
