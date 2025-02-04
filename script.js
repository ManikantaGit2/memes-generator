// script.js

function generateMeme() {
    fetch("https://meme-api.com/gimme")
        .then(response => response.json())
        .then(data => {
            document.getElementById("meme-title").innerText = data.title;
            let memeImage = document.getElementById("meme-image");
            memeImage.src = data.url;
            memeImage.style.display = "block"; // Show the image
        })
        .catch(error => console.error("Error fetching meme:", error));
}