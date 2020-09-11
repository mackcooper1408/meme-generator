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
        memeImage.style.maxWidth = "60vw";
        memeImage.style.maxHeight = "60vh";

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

        let x = document.createElement("div");
        x.setAttribute("id", "x");
        x.innerText = "X";

        newMeme.addEventListener("mouseover", function(event){
            event.preventDefault();

            newMeme.appendChild(x);
            newMeme.style.opacity = "0.5";
            
        })
        
        newMeme.addEventListener("mouseout", function(event){
            event.preventDefault();

            newMeme.removeChild(x);
            newMeme.style.opacity = "1";   
        })

        newMeme.addEventListener("click", function (event){
            event.preventDefault();
    
            memeContainer.removeChild(newMeme);
        })
    })
    
    //let newMeme = document.getElementById("new-meme");
    
    /*for (let i = 0; i < newMeme.length; i++) {
        newMeme[i].addEventListener("click", function(event) {
            event.preventDefault();
    
            memeContainer.remove(newMeme);
        })
    }*/


    

}