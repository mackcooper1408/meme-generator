window.onload = function() {

    //let newThing = document.createElement("p");
    //newThing.innerText = "HELLO WORLD!";
    //memeContainer.appendChild(newThing);

    let form = document.getElementById("form");
    let memeContainer = document.getElementById("meme-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let newMeme = document.createElement("div");
        newMeme.setAttribute("class", "new-meme");
        
        let image = document.getElementById("image_url").value;
        let topLine = document.getElementById("top_line").value;
        let botLine = document.getElementById("bottom_line").value;

        let memeImage = document.createElement("img");
        memeImage.setAttribute("src", image);

        //newMeme.style.backgroundImage = "url("+image+")";

        let memeTop = document.createElement("div");
        memeTop.setAttribute("class", "meme_top");
        memeTop.innerText = topLine;

        let memeBot = document.createElement("div");
        memeBot.setAttribute("class", "meme_bot");
        memeBot.innerText = botLine;
        
        newMeme.appendChild(memeImage);
        newMeme.appendChild(memeTop);
        newMeme.appendChild(memeBot)

        memeContainer.appendChild(newMeme);

        form.reset();
    })
}