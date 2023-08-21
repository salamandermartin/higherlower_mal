function loadGame() {
    //console.log(7); //placeholder function
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("content-container").innerHTML = this.responseText;
    }
    xhttp.open("GET", "../test.txt", true);
    xhttp.send();
}