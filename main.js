let springreiten = [
  'images/print/Logo Livestream.png',
  'images/print/springreiten/flyerweb2.png',
  'images/print/springreiten/flyerweb.png',
  'images/print/springreiten/visitenkartequer.png',
  'images/print/springreiten/A0poster.png',
  'images/print/springreiten/anzeige105x297.png',
  'images/print/springreiten/anzeige210 x148.png'

];

let heilmasseurin = [
  'images/print/heilmasseurin/header.png'
];

let sourcespringen = [
  'images/3D/print.png', 
];

let sourceheilmasseurin = [
  'images/3D/heilmasseurin.png'
];

let sourcegedanken = [
'images/3D/gedankengut.png'
];
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imageloader");
var captionText = document.getElementById("caption");



function popup_modal() {
  if (this.className == "springreiten") {
    fillmodal(springreiten);
  } else if (this.className == "heilmasseurin") {
    fillmodal(heilmasseurin);
  } else if (this.className == "springen") {
        fillmodal(sourcespringen);
  } else if (this.className == "sourceheilmass") {
    fillmodal(sourceheilmasseurin);
  } else if (this.className == "sourcegedanken") {
    fillmodal(sourcegedanken);
    modalImg.style.position = "top";
  } 

  modal.style.display = "flex";
  modal.style.flexWrap = "wrap";
  modal.style.flex = "25%";
  captionText.innerHTML = this.alt;
}


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("row");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3RemoveClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function fillmodal(listofimages) {
  listofimages.forEach(function (image) {
    var img = document.createElement('img'); // create an img element
    img.src = image;                         // set its src to the link l
    img.className = "modal-content";
    modalImg.appendChild(img);
  });
}

// code that´s being run below
var i, j, sourceimages;
var topics = [
  "springreiten", "heilmasseurin", "gedankengut", "springen", "sourceheilmass", "sourcegedanken"
];

for (i = 0; i < topics.length; i++) {
  let sourceimages = document.getElementsByClassName(topics[i]);
  for (j = 0; j < sourceimages.length; j++) {
    sourceimages[j].onclick = popup_modal;
  };
};

filterSelection("") // Execute the function and show all columns

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modalImg.innerHTML = "";
  modal.style.display = "none";
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}





