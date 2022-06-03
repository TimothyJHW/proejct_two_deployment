// const plusButton = document.getElementsByClassName("fa-square-plus");
// const minusButton = document.getElementsByClassName("fa-square-minus");

//Assign buttons to variables

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const trashButton = document.getElementById("trashButton");
const navbarArea = document.getElementById("navbar-mockup-list")
copyButtonHtml = document.getElementById("copy-html")
copyButtonCss = document.getElementById("copy-css")



var navbarList = [];
var navbarListNum = 0;




console.log(plusButton,minusButton,navbarArea)


//Add listeners to button variables

plusButton.addEventListener('click', addNavItem);
minusButton.addEventListener("click",removeNavItem);
copyButtonHtml.addEventListener("click", copyToClipboard)
copyButtonCss.addEventListener("click", copyToClipboard)
// trashButton.addEventListener("click",deleteNavbarEntry);





// Function add and delete navbar list entries

function addNavItem(event) {
    navbarList.push(["onemore",navbarListNum]);
    console.log(event);
    console.log(navbarList)
    listItem = document.createElement("li")
    listItem.innerText = "Hello There"
    navbarArea.appendChild(listItem)


    navbarListNum++;
    document.createElement("li");
}

function removeNavItem(event) {
    navbarList.pop();
    console.log(event.srcElement);
    console.log(navbarList)
    navbarArea.removeChild(navbarArea.lastElementChild)
    if (navbarListNum > 0) {navbarListNum--;}
}


function deleteNavbarEntry(event){
    console.log("del working")
}

// copy to clipboard function

function copyToClipboard(event){
    console.log("CTC working")
}