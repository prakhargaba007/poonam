function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');

    likeBtn.classList.toggle('liked');
    dislikeBtn.classList.remove('disliked');
}

function toggleDislike() {
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeBtn = document.getElementById('likeBtn');

    dislikeBtn.classList.toggle('disliked');
    likeBtn.classList.remove('liked');
}