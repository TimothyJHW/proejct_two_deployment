//Assign buttons to variables

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const trashButton = document.getElementById("trashButton");

const navbarArea = document.getElementById("navbar-mockup-list");
const copyButtonHtml = document.getElementById("copy-html");
const copyButtonCss = document.getElementById("copy-css");
const addNavEntryButton = document.getElementById('addNavEntry');
const htmlCodeSection = document.getElementById('navbar-code-html');
const cssCodeSection = document.getElementById('navbar-code-css');
const alignment = document.getElementById('align');
const textPadding = document.getElementsByClassName('padding');
const textCase = document.getElementById('case');
const cssPadding = document.getElementById('cssPadding');
const cssfontFamily = document.getElementById('fontFamily');
const cssCase = document.getElementById('cssCase');
const csscolor = document.getElementById('color');
const cssbackgroundColor = document.getElementById('cssCase');


// the text value of the font slider

document.querySelector("p > span").innerText = document.getElementById("fontsizerange").value;

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



//Add listeners to button variables

document.addEventListener("DOMContentLoaded",init);
addNavEntryButton.addEventListener('click', addNavItem);

// minusButton.addEventListener("click",removeNavItem);

copyButtonHtml.addEventListener("click", copyToClipboard)
copyButtonCss.addEventListener("click", copyToClipboard)

// trashButton.addEventListener("click",deleteNavbarEntry);

alignment.addEventListener("click",align);
textCase.addEventListener("click",changeCase);
// textPadding.forEach() addEventListener("click", padding);


cssfontFamily.addEventListener("click",fontFamily);
document.getElementById("fontsizerange").addEventListener("change",fontsizechange);
document.getElementById("txtcolor").addEventListener("change",colorPicker);
document.getElementById("bgcolor").addEventListener("change",colorPicker);


// initialising function once the DOM loads
function init() {
    loadFontList(windowsFontList)
    for (i of textPadding){
        paddingItem = document.getElementById(i.id)
        console.log(i.id.slice(-1))
        // document.i.srcElement.addEventListener("click",padding(i.id))
        // padding(paddingItem,i.id)
        paddingItem.addEventListener("click",whichSpacing)
    }
}


function whichSpacing(e) {
    if(e.srcElement.id =="paddingT"){
    targetValue = (e.target.value/3) + "rem"
    navbarArea.style.padding = targetValue
    cssCodeString = "padding : " + targetValue
    document.getElementById("cssPadding").innerText = cssCodeString
    }
    else if (e.srcElement.id =="paddingR") {
        targetValue = (e.target.value/3) + "rem"
        navbarArea.style.paddingRight = targetValue
        cssCodeString = "padding : " + targetValue
        document.getElementById("cssPadding").innerText = cssCodeString
    }
    else if (e.srcElement.id =="paddingL") {
        targetValue = (e.target.value/3) + "rem"
        navbarArea.style.paddingLeft = targetValue
        cssCodeString = "padding : " + targetValue
        document.getElementById("cssPadding").innerText = cssCodeString
    }
    else if (e.srcElement.id =="letterS") {
        targetValue = (e.target.value/3) + "rem"
        navbarArea.style.letterSpacing = targetValue
        cssCodeString = "letter-spacing : " + targetValue
        document.getElementById("cssletterSpacing").innerText = cssCodeString
    }
}

function colorPicker(e) {
    console.log(e)
    if (e.srcElement.id == "bgcolor") {
        navbarArea.style.backgroundColor = e.target.value;
        cssCodeString = "bacground-color : " + e.target.value
        document.getElementById("cssbackgroundColor").innerText = cssCodeString
    }
    else {
        navbarArea.style.color= e.target.value
        cssCodeString = "color : " + e.target.value
        document.getElementById("csscolor").innerText = cssCodeString
    }
}


// text-alignment function

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


// change font function

function fontFamily(e) {
    targetValue = e.target.value
    navbarArea.style.fontFamily = targetValue;
    cssCodeString = "font-family: " + targetValue
    document.getElementById("cssfontFamily").innerText = cssCodeString
}

// change text case function

function changeCase (e) {
    if(e.target.getAttribute("id")=="upper"){
        navbarArea.style.textTransform = "uppercase";
        cssCodeString = "text-transform : uppercase;"
        document.getElementById("cssCase").innerText = cssCodeString
    }
    else if (e.target.getAttribute("id")=="lower"){
        navbarArea.style.textTransform = "lowercase";
        cssCodeString = "text-transform : lowercase;"
        document.getElementById("cssCase").innerText = cssCodeString
    }
    else if (e.target.getAttribute("id")=="capitalize"){
        navbarArea.style.textTransform = "capitalize";
        cssCodeString = "text-transform : capitalize;"
        document.getElementById("cssCase").innerText = cssCodeString
    }
}

function fontsizechange(e) {
    document.querySelector("p > span").innerHTML = e.target.value;
    navbarArea.style.fontSize = e.target.value + "px";

}



// Function add and delete navbar list entries

function addNavItem(e) {
    e.preventDefault();
    if (navbarListNum < 6) {
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
        htmlCodeStringElement.id = (navbarListNum);
        htmlCodeStringElement.innerText = htmlCodeString;
        htmlCodeSection.appendChild(htmlCodeStringElement)
} else {
    alert("Maximum number of navbar entries is 6")
}
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


function removeNavItem(e) {
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

function copyToClipboard(e){
    if (e.target.getAttribute("id") == "copy-html") {
        // console.log(document.querySelector("#navbar-code-html").innerText)
        clipboard = document.querySelector("#navbar-code-html").innerText;
        clipboard += "\n</nav>";
        navigator.clipboard.writeText(clipboard);
    }
    else {

    }


    // for (i=0;i<=htmlCodeSection.length;i++){
        
    // }
}

