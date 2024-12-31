window.addEventListener("DOMContentLoaded", function(){


  // Color Create Display : 
const mainImgColor = document.getElementById("mainimgColor-recentwork");

// Function to clear overlays from all boxes
function clearColorOverlays() {
  for (let i = 1; i <= 2; i++) {
    const boxColorImg = document.getElementById(`boxColor${i}-recent`);
    const overlay = boxColorImg.querySelector(".overlay");
    if (overlay) {
      overlay.style.display = "none"; 
    }
  }
}

// Add click event to each box
for (let i = 1; i <= 2; i++) {
  const boxColorImg = document.getElementById(`boxColor${i}-recent`);
  const boxColorURL = boxColorImg.children[0].getAttribute("src");

  // Add overlay element to each box
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = '<span class="material-symbols-outlined material-symbols-outlined-portfolio">visibility</span>'; 
  boxColorImg.appendChild(overlay);

  boxColorImg.addEventListener("click", (e) => {
    clearColorOverlays(); 
    overlay.style.display = "flex"; 
    mainImgColor.innerHTML = `<img src="${boxColorURL}" width="100%" />`;
    e.preventDefault();
  });
}


// Travel Guru Display : 
const mainImgGuru = document.getElementById("mainimgGuru-recentwork");

// Function to clear overlays from all boxes
function clearGuruOverlays() {
  for (let i = 1; i <= 5; i++) {
    const boxGuruImg = document.getElementById(`boxGuru${i}-recent`);
    const overlay = boxGuruImg.querySelector(".overlay");
    if (overlay) {
      overlay.style.display = "none"; 
    }
  }
}

// Add click event to each box
for (let i = 1; i <= 5; i++) {
  const boxGuruImg = document.getElementById(`boxGuru${i}-recent`);
  const boxGuruURL = boxGuruImg.children[0].getAttribute("src");

  // Add overlay element to each box
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = '<span class="material-symbols-outlined material-symbols-outlined-portfolio">visibility</span>'; 
  boxGuruImg.appendChild(overlay);

  boxGuruImg.addEventListener("click", (e) => {
    clearGuruOverlays(); 
    overlay.style.display = "flex"; 
    mainImgGuru.innerHTML = `<img src="${boxGuruURL}" width="100%" />`;
    e.preventDefault();
  });
}



// Custom Clocks Display : 

// Get reference to the main image: 
const mainImg = document.getElementById("mainimg-recentwork"); 

function clearOverlays() {
  for (let i = 1; i <= 5; i++) {
    const boxImg = document.getElementById(`box${i}-recent`);
    const overlay = boxImg.querySelector(".overlay");
    if (overlay) {
      overlay.style.display = "none"; 
    }
  }
}


// Five boxes are set up with "thumbnail" images:
// Get reference to each box - using variable boxImg
// Get reference to the URL for each image using .getAttribute
// Add event listener to replace main image box with thumbnail clicked 

for (let i = 1; i <= 5; i++) {
    const boxImg = document.getElementById(`box${i}-recent`);
    const boxURL = boxImg.children[0].getAttribute("src");

   // Add overlay element to each box
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = '<span class="material-symbols-outlined material-symbols-outlined-portfolio">visibility</span>'; 
  boxImg.appendChild(overlay);
  
    boxImg.addEventListener("click", (e) => {
      clearOverlays(); 
      overlay.style.display = "flex"; 
      mainImg.innerHTML = `<img src=${boxURL} width="100%" />`;
      e.preventDefault();
    });
  }



  // Cat Cafe Display : 

// Get reference to the main image: 
const mainCatImg = document.getElementById("mainCatImg-recentwork"); 

function clearCatOverlays() {
  for (let i = 1; i <= 4; i++) {
    const boxCatImg = document.getElementById(`boxCat${i}-recent`);
    const overlay = boxCatImg.querySelector(".overlay");
    if (overlay) {
      overlay.style.display = "none"; 
    }
  }
}


// Four boxes are set up with "thumbnail" images:
// Get reference to each box - using variable boxCatImg
// Get reference to the URL for each image using .getAttributes 
// Add event listener to replace main image box with thumbnail clicked 

for (let i = 1; i <= 4; i++) {
    const boxCatImg = document.getElementById(`boxCat${i}-recent`);
    const boxCatURL = boxCatImg.children[0].getAttribute("src"); 


const overlay = document.createElement("div");
overlay.className = "overlay";
overlay.innerHTML = '<span class="material-symbols-outlined material-symbols-outlined-portfolio">visibility</span>'; 
boxCatImg.appendChild(overlay);
  
    boxCatImg.addEventListener("click", (e) => {
      clearCatOverlays(); 
      overlay.style.display = "flex"; 
      mainCatImg.innerHTML = `<img src=${boxCatURL} width="100%" />`;
      e.preventDefault();
    });
  }




  // Piano Portfolio Rotation Images: 

  // Initalize an array to hold the piano images: 

  const pianoArray = [{ page: 42, url: "images/theory1.jpg"}, {page: 32, url:"images/theory2.jpg"}, {page: 46, url:"images/theory3.jpg"}, {page: 61, url:"images/theory4.jpg"}]; 

  let currPianoImage = 0; 

    // Get reference to the div with the rotation image child 

  const rotatingPiano = document.getElementById("imgtag-rotatingpiano"); 
  rotatingPiano.src = pianoArray[currPianoImage].url; 

  const rotatingPageNum = document.getElementById("pagenumtag-rotatingpiano"); 
  rotatingPageNum.innerText = `Page ${pianoArray[currPianoImage].page}`; 

  // Use setInterval to change to the next image in the array every 5 seconds 

setInterval(changePianoImg, 5000); 

function changePianoImg() {
  currPianoImage ++; 
  if(currPianoImage === pianoArray.length) {
    currPianoImage = 0; 
  };

  // Get reference to the div with the rotation image child 

rotatingPiano.src = pianoArray[currPianoImage].url; 
rotatingPageNum.innerText = `Page ${pianoArray[currPianoImage].page}`; 

}; 

}
); 
