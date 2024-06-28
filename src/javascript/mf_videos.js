let favorites = [];

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    if (query === '') {
        alert('Por favor, digite um termo de busca.');
        return;
    }

    fetch(`http://localhost:3000/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const videosList = document.getElementById('videos-list');
            videosList.innerHTML = '';
            data.items.forEach(item => {
                const videoItem = document.createElement('li');
                videoItem.textContent = item.snippet.title;

                const favoriteButton = document.createElement('button');
                favoriteButton.textContent = 'Favorito';
                favoriteButton.addEventListener('click', () => {
                    toggleFavorite(item);
                });

                videoItem.appendChild(favoriteButton);
                videosList.appendChild(videoItem);
            });
        });
});

function toggleFavorite(video) {
    const index = favorites.findIndex(fav => fav.id.videoId === video.id.videoId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(video);
    }
    updateFavoritesCount();
}

function updateFavoritesCount() {
    document.getElementById('favorites-count').textContent = `Favoritos: ${favorites.length}`;
}
