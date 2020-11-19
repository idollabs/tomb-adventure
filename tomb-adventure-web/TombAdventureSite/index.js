let panelIdA = document.getElementById("panelA");
let panelIdB = document.getElementById("panelB");
let panelIdC = document.getElementById("panelC");
let panelIdD = document.getElementById("panelD");
let panelIdE = document.getElementById("panelE");
let panelIdF = document.getElementById("panelF");
let panelIdG = document.getElementById("panelG");
let pImgId = [document.getElementById("panelImgA"),
  document.getElementById("panelImgB"),
  document.getElementById("panelImgC"),
  document.getElementById("panelImgD"),
  document.getElementById("panelImgE"),
  document.getElementById("panelImgF"),
  document.getElementById("panelImgG"),
];
let pText = [document.getElementById("centeredA"),
  document.getElementById("centeredB"),
  document.getElementById("centeredC"),
  document.getElementById("centeredD"),
  document.getElementById("centeredE"),
  document.getElementById("centeredF"),
  document.getElementById("centeredG"),
];


//panel functions

let panelNumber = 0;
const panelConstant = 7;

let tempNumber = 0;
let hasBeenClicked = [false,false,false,false,false,false,false];

let tempPId = 0;

panelIdA.onclick = function(){
  tempPId = 0;
  panelClick()
}

panelIdB.onclick = function(){
  tempPId = 1;
  panelClick()
}

panelIdC.onclick = function(){
  tempPId = 2;
  panelClick()
}

panelIdD.onclick = function(){
  tempPId = 3;
  panelClick()
}

panelIdE.onclick = function(){
  tempPId = 4;
  panelClick()
}

panelIdF.onclick = function(){
  tempPId = 5;
  panelClick()
}

panelIdG.onclick = function(){
  tempPId = 6;
  panelClick()
}

function panelClick(){
  if(!hasBeenClicked[tempPId]){
    console.log("worked");
    hasBeenClicked[tempPId] = true;
    panelNumber = tempNumber
    panelNumber++;
    tempNumber = panelNumber;
    pImgId[tempPId].src = "images/laytablet400px.png"
    playPanelAudio();
    //update panel text
    for(let i = 0; i < hasBeenClicked.length; i++){
      if(hasBeenClicked[i]){
        pText[i].innerHTML = panelNumber + "/" + panelConstant;
      } 
    }
    if(panelNumber == 7){
      document.getElementById('reward').style = "display: block;";
    }
  }
}

function playPanelAudio() {
    const audio = document.getElementById("panelSound");
    audio.play();
  }

let targetHTML = document.getElementById("cssDiv");
let newCssSheet = "<link href='structure.css' rel='stylesheet'></link>";

document.getElementById("enterButton").onclick = function(){
targetHTML.innerHTML = newCssSheet;
}

const startInfoImg = document.getElementById("infoImg");
startInfoImg.onclick = function(){
startInfoImg.style.display = "none";

}

