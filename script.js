let nextPageButton = document.getElementById("nextButton");

function setup(){
    doEventListeners();
}

function doEventListeners(){
    nextPageButton.addEventListener("click", () => {
        back();
    });
}

function back(){
    let url = window.location.href;
    window.location.href = url.substring(0, url.lastIndexOf("/"))
}