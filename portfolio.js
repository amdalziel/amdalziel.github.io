window.addEventListener("DOMContentLoaded", function(){

// Custom Clocks Display : 

// Get reference to the main image: 
const mainImg = document.getElementById("mainimg-recentwork"); 


// Five boxes are set up with "thumbnail" images:
// Get reference to each box - using variable boxImg
// Get reference to the URL for each image using .getAttribute
// Add event listener to replace main image box with thumbnail clicked 

for (let i = 1; i <= 5; i++) {
    const boxImg = document.getElementById(`box${i}-recent`);
    const boxURL = boxImg.children[0].getAttribute("src");
  
    boxImg.addEventListener("click", (e) => {
      mainImg.innerHTML = `<img src=${boxURL} width="100%" />`;
      e.preventDefault();
    });
  }



  // Cat Cafe Display : 

// Get reference to the main image: 
const mainCatImg = document.getElementById("mainCatImg-recentwork"); 


// Four boxes are set up with "thumbnail" images:
// Get reference to each box - using variable boxCatImg
// Get reference to the URL for each image using .getAttributes 
// Add event listener to replace main image box with thumbnail clicked 

for (let i = 1; i <= 4; i++) {
    const boxCatImg = document.getElementById(`boxCat${i}-recent`);
    const boxCatURL = boxCatImg.children[0].getAttribute("src"); 
  
    boxCatImg.addEventListener("click", (e) => {
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
