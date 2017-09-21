function myFunction() {
    console.log("in myFunction()");
    document.getElementById("title").style.color = "red";
    var pElem = document.createElement("p");
    pElem.innerHTML = "Hello Javascript!";
    document.body.appendChild(pElem);
}

myFunction();