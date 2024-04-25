window.addEventListener("DOMContentLoaded", function(){

// Home Page Top Banner: 

const amyAvatar = document.getElementById("banner-movingvisual").childNodes[9].childNodes[1]; 


// Enlarge avatar visual after 1 second

// setTimeout(avatarIncrease, 1000);

// function avatarIncrease() {
//     amyAvatar.style.border = "solid 12px #F2B707"; 
//     amyAvatar.style.border = "solid 12px #F2B707"; 
//     return amyAvatar; 
// }; 

// setTimeout(avatarDecrease, 2000);

// function avatarDecrease() {
//     amyAvatar.style.border = "solid 3px #F2B707"; 
//     amyAvatar.style.border = "solid 3px #F2B707"; 
//     return amyAvatar; 
// }; 


// Change icons every 3 seconds

// Get reference to the images placed within the banner using .childNodes
const bannerImg1 = document.getElementById("banner-movingvisual").childNodes[1];
const bannerImg2 = document.getElementById("banner-movingvisual").childNodes[5];

// Set up an array for each moving icon in the top banner
const img1Array = ["icons/coffee.png", "icons/mouse.png", "icons/music.png", "icons/imac.png", "icons/piano.png"];
const img2Array = ["icons/imac.png", "icons/piano.png", "icons/coffee.png", "icons/mouse.png", "icons/music.png"];

var currentBannerImg1Index = 1;
var currentBannerImg2Index = 1;


setInterval(() => {
    changeImage(bannerImg1, currentBannerImg1Index, img1Array);
    changeImage(bannerImg2, currentBannerImg2Index, img2Array);
}, 3000);

function changeImage(img, currIndex, array) {
    img.src = array[currIndex];
    currIndex++;

    if (currIndex === array.length) {
        currIndex = 0;
    }
    currentBannerImg1Index = currIndex;
  
    currentBannerImg2Index = currIndex;

}




}
); 
