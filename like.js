// function toggleLike() {
//     const likeBtn = document.getElementById('likeBtn');
//     const dislikeBtn = document.getElementById('dislikeBtn');

//     likeBtn.classList.toggle('liked');
//     dislikeBtn.classList.remove('disliked');
// }

// function toggleDislike() {
//     const dislikeBtn = document.getElementById('dislikeBtn');
//     const likeBtn = document.getElementById('likeBtn');

//     dislikeBtn.classList.toggle('disliked');
//     likeBtn.classList.remove('liked');
// }

let likes = parseInt(localStorage.getItem('likes')) || 0;
let isLiked = localStorage.getItem('isLiked') === 'true';

updateLikeCount();

function updateLikeCount() {
    document.getElementById('likeCount').innerText = likes;
}

function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');

    if (isLiked) {
        likes--;
    } else {
        likes++;
    }

    isLiked = !isLiked;
    likeBtn.classList.toggle('liked');

    localStorage.setItem('likes', likes);
    localStorage.setItem('isLiked', isLiked);

    updateLikeCount();
}

function toggleDislike() {
    const dislikeBtn = document.getElementById('dislikeBtn');

    if (isLiked) {
        likes--;
        isLiked = false;
        document.getElementById('likeBtn').classList.remove('liked');
    }

    dislikeBtn.classList.toggle('disliked');

    localStorage.setItem('likes', likes);
    localStorage.setItem('isLiked', isLiked);

    updateLikeCount();
}