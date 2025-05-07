document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.favorite-btn');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    buttons.forEach(btn => {
        const card = btn.closest('.card');
        const recipeId = card.dataset.id;

        if (favorites.includes(recipeId)) {
            btn.classList.add('favorited');
        }

        btn.addEventListener('click', () => {
            if (favorites.includes(recipeId)) {
                favorites.splice(favorites.indexOf(recipeId), 1);
                btn.classList.remove('favorited');
            } else {
                favorites.push(recipeId);
                btn.classList.add('favorited');
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
});