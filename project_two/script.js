//Assign buttons to variables

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
'Arial','Arial Black','Bahnschrift','Calibri','Cambria','Cambria Math','Candara','Comic Sans MS','Consolas','Constantia','Corbel','Courier New','Ebrima','Franklin Gothic Medium','Gabriola','Gadugi','Georgia','HoloLens MDL2 Assets','Impact','Ink Free','Javanese Text','Leelawadee UI','Lucida Console','Lucida Sans Unicode','Malgun Gothic','Marlett','Microsoft Himalaya','Microsoft JhengHei','Microsoft New Tai Lue','Microsoft PhagsPa','Microsoft Sans Serif','Microsoft Tai Le','Microsoft YaHei','Microsoft Yi Baiti','MingLiU-ExtB','Mongolian Baiti','MS Gothic','MV Boli','Myanmar Text','Nirmala UI','Palatino Linotype','Segoe MDL2 Assets','Segoe Print','Segoe Script','Segoe UI','Segoe UI Historic','Segoe UI Emoji','Segoe UI Symbol','SimSun','Sitka','Sylfaen','Symbol','Tahoma','Times New Roman','Trebuchet MS','Verdana','Webdings','Wingdings','Yu Gothic',
]

// General Variable Definitions

var navbarListNum = 0;

//Add listeners to button variables

document.addEventListener("DOMContentLoaded",init);
addNavEntryButton.addEventListener('click', addNavItem);
copyButtonHtml.addEventListener("click", copyToClipboard)
copyButtonCss.addEventListener("click", copyToClipboard)
alignment.addEventListener("click",align);
textCase.addEventListener("click",changeCase);
cssfontFamily.addEventListener("click",fontFamily)

document.getElementById("fontsizerange").addEventListener("change",fontsizechange);
document.getElementById("opacityrange").addEventListener("change",opacitychange);
document.getElementById("txtcolor").addEventListener("change",colorPicker);
document.getElementById("bgcolor").addEventListener("change",colorPicker);


// initialising function once the DOM loads

function init() {
    loadFontList(windowsFontList);
    trash = document.querySelector(".fa-trash");
    attachDragListeners(trash);
//adds event listeners to each of the padding input rockers.
    for (i of textPadding){
        paddingItem = document.getElementById(i.id);
        paddingItem.addEventListener("click",whichSpacing);
    }
}

function whichSpacing(e) {
    if(e.target.id =="paddingT"){
    targetValue = e.target.value + "px";
    navbarArea.style.padding = targetValue;
    cssCodeString = "padding : " + targetValue;
    document.getElementById("cssPadding").innerText = cssCodeString;
    }
    else if (e.target.id =="paddingR") {
        targetValue = e.target.value + "px"
        listElements = document.querySelectorAll("#navbar-mockup-list li");
        for (i of listElements){
            i.style.paddingLeft = "";
            i.style.paddingRight = targetValue;
        }
        cssCodeString = "padding-right : " + targetValue;
        document.getElementById("cssPaddingLR").innerText = cssCodeString;
        document.getElementById("paddingL").value = 1;
    }
    else if (e.target.id =="paddingL") {
        targetValue = e.target.value + "px";
        listElements = document.querySelectorAll("#navbar-mockup-list li");
        for (i of listElements){
            i.style.paddingRight = "";
            i.style.paddingLeft = targetValue;
        }
        cssCodeString = "padding-left : " + targetValue;
        document.getElementById("cssPaddingLR").innerText = cssCodeString;
        document.getElementById("paddingR").value = 1;
    }
    else if (e.target.id =="letterS") {
        targetValue = e.target.value + "px";
        navbarArea.style.letterSpacing = targetValue;
        cssCodeString = "letter-spacing : " + targetValue;
        document.getElementById("cssletterSpacing").innerText = cssCodeString;
    }
}

function colorPicker(e) {
    if (e.srcElement.id == "bgcolor") {
        navbarArea.style.backgroundColor = e.target.value;
        cssCodeString = "background-color : " + e.target.value;
        document.getElementById("cssbackgroundColor").innerText = cssCodeString;
    }
    else {
        navbarArea.style.color= e.target.value;
        cssCodeString = "color : " + e.target.value;
        document.getElementById("csscolor").innerText = cssCodeString;
    }
}

// text-alignment function

function align (e) {
    if(e.target.getAttribute("id")=="left"){
        navbarArea.style.justifyContent = "left";
        cssCodeString = "justify-content : left;"
        document.getElementById("cssAlignment").innerText = cssCodeString;
    }
    else if (e.target.getAttribute("id")=="center"){
        navbarArea.style.justifyContent = "center";
        cssCodeString = "justify-content : center;"
        document.getElementById("cssAlignment").innerText = cssCodeString;
    }
    else if (e.target.getAttribute("id")=="right"){
        navbarArea.style.justifyContent = "right";
        cssCodeString = "justify-content : right;"
        document.getElementById("cssAlignment").innerText = cssCodeString;
    }
    else if (e.target.getAttribute("id")=="fullwidth"){
        navbarArea.style.justifyContent = "space-between";
        cssCodeString = "justify-content : space-between;"
        document.getElementById("cssAlignment").innerText = cssCodeString;
        listElements = document.querySelectorAll("#navbar-mockup-list li");
        for (i of listElements) {
        i.style.paddingRight = "";
        i.style.paddingLeft = "";
        document.getElementById("cssPaddingLR").innerText = "padding-left: 0px";
        document.getElementById("paddingR").value = 1;
        document.getElementById("paddingL").value = 1;
        }
    }
}

// change font function

function fontFamily(e) {
    targetValue = e.target.value
    navbarArea.style.fontFamily = targetValue;
    cssCodeString = "font-family: " + targetValue;
    document.getElementById("cssfontFamily").innerText = cssCodeString;
}

// change text case function

function changeCase (e) {
    if(e.target.getAttribute("id")=="upper"){
        navbarArea.style.textTransform = "uppercase";
        cssCodeString = "text-transform : uppercase;"
        document.getElementById("cssCase").innerText = cssCodeString;
    }
    else if (e.target.getAttribute("id")=="lower"){
        navbarArea.style.textTransform = "lowercase";
        cssCodeString = "text-transform : lowercase;"
        document.getElementById("cssCase").innerText = cssCodeString;
    }
    else if (e.target.getAttribute("id")=="capitalize"){
        navbarArea.style.textTransform = "capitalize";
        cssCodeString = "text-transform : capitalize;"
        document.getElementById("cssCase").innerText = cssCodeString;
    }
}

//slider functions

function fontsizechange(e) {
    document.querySelector("p > span").innerHTML = e.target.value;
    cssCodeString = "font-size : "+e.target.value + " px;"
    document.getElementById("cssfontSize").innerText = cssCodeString;
    navbarArea.style.fontSize = e.target.value + "px";
}

function opacitychange(e) {
    navbarArea.style.opacity = e.target.value + "%";
    cssCodeString = "opacity: "+e.target.value + "% ;"
    document.getElementById("cssopacity").innerText = cssCodeString;
}

// Function add and delete navbar list entries

function addNavItem(e) {
    e.preventDefault();
    if (navbarListNum < 5) {
        newNavItem = document.getElementById('navbar-entries').value;
        listItem = document.createElement("li");
        listItem.innerHTML = newNavItem;
        navbarArea.appendChild(listItem);
        htmlCodeString = "<li>"+newNavItem+"</li>";

// On the screen it appears as an "li" element behind the scenes it is a "p" element

        htmlCodeStringElement = document.createElement("p");
        htmlCodeStringElement.setAttribute("draggable",true);
        htmlCodeStringElement.id = navbarListNum;
        htmlCodeStringElement.innerText = htmlCodeString;
        attachDragListeners(htmlCodeStringElement);
        htmlCodeSection.appendChild(htmlCodeStringElement);
        document.getElementById('navbar-entries').value = " ";
        document.getElementById('navbar-entries').focus();
        navbarListNum++;
} else {
    alert("Maximum number of navbar entries is 5")
}
}

//drag listeners and list update

function attachDragListeners(el) {
    el.addEventListener("dragstart",()=> dragStartId = el.id);
    // it is necessary to preventDefault on both enter and over drag events in order to allow a drop to take place.
    el.addEventListener("dragover", (e)=> e.preventDefault());
    el.addEventListener("dragenter",(e)=> {e.preventDefault(); el.classList.add("dragover")});
    el.addEventListener("dragleave",()=> el.classList.remove("dragover"));
    el.addEventListener("drop", updateNavItems);
}

function updateNavItems(e) {
    //deletion drop process     
    e.target.classList.remove("dragover");   
    if(e.target.id == "trash"){
        itemtoDelete = document.getElementById(`${dragStartId}`)
        // this is to delete the entry in the mockup area. Gets nodelist from the ul id of navbar-mockup-list
        mockupitemtoDelete = document.querySelectorAll("#navbar-mockup-list li")
        itemtoDelete.remove();
        mockupitemtoDelete[dragStartId].remove();
        navbarListNum --;
        reIndexEntries()
    e.target.classList.remove("dragover");}
    //reordering drop process
    else {
        let codeList = document.querySelectorAll("#navbar-code-html p")
        let changeTo = e.target.closest("p");
        let ctDuplicate = e.target.closest("p").innerHTML;
        let changeFrom = codeList[dragStartId];
        changeTo.innerHTML = changeFrom.innerHTML
        changeFrom.innerHTML = ctDuplicate;
        reIndexEntries();
        reloadNavbarMockup(); 
    }
}

function reIndexEntries(){
    let iter = 0;
    const listEntries = document.querySelectorAll("#navbar-code-html p")
    for (i of listEntries){
        i.id = iter.toString();
        iter++;
    }
}

// takes an changes in the code area and replicates them in the nodelist in the mockup area.
function reloadNavbarMockup () {
    const mockupList = document.querySelectorAll("#navbar-mockup-list li");
    const codeList = document.querySelectorAll("#navbar-code-html p");
        for (i=0; i < mockupList.length; i++) {
            //removes the "li" tags embedded in the text of the p tag in the code area
            clistOne = codeList[i].textContent.slice(4,-5)
            mockupList[i].innerHTML = clistOne;
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


// copy to clipboard function

function copyToClipboard(e){
    if (e.target.getAttribute("id") == "copy-html") {
        clipboard = document.querySelector("#navbar-code-html").innerText;
        clipboard += "\n</nav>";
        navigator.clipboard.writeText(clipboard);
    }
    else {
        clipboard = document.querySelector("#navbar-code-css").innerText;
        navigator.clipboard.writeText(clipboard);

    }
    alert("Copied!");

}



