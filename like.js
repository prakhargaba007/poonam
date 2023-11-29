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
// Creat a new div
var newDiv = document.createElement("div");

// Set attributes or styles if needed
newDiv.className = "new-component";
newDiv.innerHTML = `<h1>Poonam Bhatia</h1>
<nav>
<a href="index.html">Home</a>
<a href="page2.html">Prem Ragini</a>
</nav>`;

// Append the new div to the container
document.getElementById("header").appendChild(newDiv);


// Creat a new div
var newDiv2 = document.createElement("div");

// Set attributes or styles if needed
newDiv2.className = "like_dilike";
newDiv2.innerHTML = `<button id="likeBtn" onclick="toggleLike()">👍 Like</button>
<button id="dislikeBtn" onclick="toggleDislike()">👎 Dislike</button>`;

// Append the new div to the container
document.getElementById("like").appendChild(newDiv2);