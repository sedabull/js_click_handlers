const colorBox = document.querySelector("#color-box");
// JS for the gray button
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
    colorBox.className = "gray";
});
// JS for the blue button
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
    colorBox.className = "blue";
});
// JS for the pink button
const pinkButton = document.querySelector('#pink-button');
pinkButton.addEventListener('click', function(){
    colorBox.className = "pink";
});

let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
    countspan.innerHTML = ++count;
});


const evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {
    if (count % 2 === 0) {
        alert("EVEN!");
    } else {
        alert("ODD!");
    }//end if/else
});