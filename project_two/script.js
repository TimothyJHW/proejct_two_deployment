// const plusButton = document.getElementsByClassName("fa-square-plus");
// const minusButton = document.getElementsByClassName("fa-square-minus");

//Assign buttons to variables

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const trashButton = document.getElementById("trashButton");

var navbarList = [];
var navbarListNum = 0;




console.log(plusButton,minusButton)


//Add listeners to button variables

plusButton.addEventListener('click', addNavItem);
minusButton.addEventListener("click",removeNavItem);
trashButton.addEventListener("click",deleteNavbarEntry);







function addNavItem(event) {
    navbarList.push(["onemore",navbarListNum]);
    console.log(event.value);
    navbarListNum++;
    document.createElement("li");
}

function removeNavItem(event) {
    navbarList.pop();
    console.log(event.srcElement);
    if (navbarListNum > 0) {navbarListNum--;}
}


function deleteNavbarEntry(event){
    
}