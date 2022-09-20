// const plusButton = document.getElementsByClassName("fa-square-plus");
// const minusButton = document.getElementsByClassName("fa-square-minus");

//Assign buttons to variables

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const trashButton = document.getElementById("trashButton");

const navbarArea = document.getElementById("navbar-mockup-list");
copyButtonHtml = document.getElementById("copy-html");
copyButtonCss = document.getElementById("copy-css");
const addNavEntryButton = document.getElementById('addNavEntry');
const htmlCodeSection = document.getElementById('navbar-code-html');
const cssCodeSection = document.getElementById('navbar-code-css');
const alignment = document.getElementById('align');
const csspadding = document.getElementById('padding');
var cssPanel = {
    display: "inline-block",
    justifyContent: "right",
    padding: 0,
}

// General Variable Definitions

var navbarList = [];
var navbarListNum = 0;
htmlCopytoClipboard = {}
cssCopytoClipboard = {}




// console.log(plusButton,minusButton,navbarArea)


//Add listeners to button variables

addNavEntryButton.addEventListener('click', addNavItem);
minusButton.addEventListener("click",removeNavItem);
copyButtonHtml.addEventListener("click", copyToClipboard)
copyButtonCss.addEventListener("click", copyToClipboard)
// trashButton.addEventListener("click",deleteNavbarEntry);
alignment.addEventListener("click",align);
csspadding.addEventListener("click",padding);

function align (e) {

    if(e.target.getAttribute("id")=="left"){
        navbarArea.style.justifyContent = "left";
        cssCodeString = "justify-content : left;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
    else if (e.target.getAttribute("id")=="center"){
        navbarArea.style.justifyContent = "center";
        cssCodeString = "justify-content : center;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
    else if (e.target.getAttribute("id")=="right"){
        navbarArea.style.justifyContent = "right";
        cssCodeString = "justify-content : right;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
}

function updateCssPanel () {

}


function padding(e) {
    target= e.target
    
}






// Function add and delete navbar list entries

function addNavItem(event) {
    event.preventDefault();
    newNavItem = document.getElementById('navbar-entries').value
    navbarList.push([newNavItem.value,navbarListNum]);
    listItem = document.createElement("li")
    listItem.innerHTML = newNavItem;
    console.log(listItem)
    navbarArea.appendChild(listItem)
    navbarListNum++;
    // document.createElement("li");
    htmlCodeString = "<li>"+newNavItem+"</li>";

    // On the screen it appears as an "li" element behind the scenes it is a "p" element

    htmlCodeStringElement = document.createElement("p");
    htmlCodeStringElement.setAttribute("draggable",true)
    htmlCodeStringElement.innerText = htmlCodeString;
    htmlCodeSection.appendChild(htmlCodeStringElement)

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
    // for (i=0;i<=htmlCodeSection.length;i++){
        
    // }
}

