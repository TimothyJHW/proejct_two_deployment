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
const textCase = document.getElementById('case');
const cssPadding = document.getElementById('padding');
const cssfontFamily = document.getElementById('fontFamily');

const windowsFontList = [
'Arial',
'Arial Black',
'Bahnschrift',
'Calibri',
'Cambria',
'Cambria Math',
'Candara',
'Comic Sans MS',
'Consolas',
'Constantia',
'Corbel',
'Courier New',
'Ebrima',
'Franklin Gothic Medium',
'Gabriola',
'Gadugi',
'Georgia',
'HoloLens MDL2 Assets',
'Impact',
'Ink Free',
'Javanese Text',
'Leelawadee UI',
'Lucida Console',
'Lucida Sans Unicode',
'Malgun Gothic',
'Marlett',
'Microsoft Himalaya',
'Microsoft JhengHei',
'Microsoft New Tai Lue',
'Microsoft PhagsPa',
'Microsoft Sans Serif',
'Microsoft Tai Le',
'Microsoft YaHei',
'Microsoft Yi Baiti',
'MingLiU-ExtB',
'Mongolian Baiti',
'MS Gothic',
'MV Boli',
'Myanmar Text',
'Nirmala UI',
'Palatino Linotype',
'Segoe MDL2 Assets',
'Segoe Print',
'Segoe Script',
'Segoe UI',
'Segoe UI Historic',
'Segoe UI Emoji',
'Segoe UI Symbol',
'SimSun',
'Sitka',
'Sylfaen',
'Symbol',
'Tahoma',
'Times New Roman',
'Trebuchet MS',
'Verdana',
'Webdings',
'Wingdings',
'Yu Gothic',
]


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
textCase.addEventListener("click",changeCase);
cssPadding.addEventListener("click",padding);
cssfontFamily.addEventListener("click",fontFamily);



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
    else if (e.target.getAttribute("id")=="fullwidth"){
        navbarArea.style.justifyContent = "space-between";
        cssCodeString = "justify-content : space-between;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
}

function updateCssPanel () {

}


function padding(e) {
    targetValue = (e.target.value/3) + "rem"
    navbarArea.style.padding = targetValue
    cssCodeString = "padding : " + targetValue
    document.getElementById("cssPadding").innerText = cssCodeString
}
function fontFamily(e) {
    targetValue = e.target.value
    navbarArea.style.fontFamily = targetValue;
    cssCodeString = "font-family: " + targetValue
    document.getElementById("cssfontFamily").innerText = cssCodeString
}

function changeCase (e) {
    if(e.target.getAttribute("id")=="upper"){
        navbarArea.style.textTransform = "uppercase;"
        cssCodeString = "text-transform : uppercase;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
    else if (e.target.getAttribute("id")=="lower"){
        navbarArea.style.textTransform = "lowercase;"
        cssCodeString = "text-transform : lowercase;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
    else if (e.target.getAttribute("id")=="capitalize"){
        navbarArea.style.textTransform = "capitalize";
        cssCodeString = "text-transform : capitalize;"
        document.getElementById("cssAlignment").innerText = cssCodeString
    }
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

//loads the array of fonts into the select html elements

function loadFontList(list) {
    fontOptions = document.getElementById("fontFamily");
    for (i of list) {
        newOption = document.createElement("option");
        newOption.innerHTML = i;
        newOption.setAttribute("value",i);
        fontOptions.appendChild(newOption)
    }
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

