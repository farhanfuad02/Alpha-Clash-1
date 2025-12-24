function setBackgrounColor(id)
{
    const element = document.getElementById(id);
    element.classList.add("bg-amber-400");
}

function play(){
    hideElement("home");
    showElement("playground");
    continueGame();
}

function getRandomAlphabet()
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}