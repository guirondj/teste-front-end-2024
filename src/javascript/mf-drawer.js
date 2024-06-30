const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');

        fetch(target)
            .then(response => response.text())
            .then(data => {
                document.getElementById('videos-container').innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar a página:', error);
            });
    });
});
