function hideElement(id){
    const element = document.getElementById(id);
    element.classList.add("hidden");
}

function showElement(id){
    const element = document.getElementById(id);
    element.classList.remove("hidden");
}

function continueGame(){
    const alphabet = getRandomAlphabet();  
    document.getElementById("alphabet").innerText = alphabet;

    setBackgrounColor(alphabet);
}

