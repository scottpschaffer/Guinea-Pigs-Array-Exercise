// Where all output text is written to
var output = document.getElementById("output-target");

// Get Guinea-Pig control
var gPig = document.getElementById("guinea-pig");


// Part #1 ///////////////////////////
// Sessions under article
var intro = document.getElementsByClassName("article-section");

// Add Event Listeners to all Sessions under Article
for (var i=0; i<intro.length; i++){
  intro[i].addEventListener("click", function(e){
    output.innerHTML = "You clicked on the " + e.target.innerHTML + " section";
  });
}
//////////////////////////////////////


// Part #2 and #3 ///////////////////////////
// Get h1 under header
var header1 = document.getElementById("page-title");

// Event Handler for when Mouse moves over h1
header1.addEventListener("mouseenter", function(e){
  output.innerHTML = "You moved your mouse over the header";
});

// Event Handler for when Mouse leaves h1
header1.addEventListener("mouseleave", function(e){
  output.innerHTML = "You left me!!";
});
//////////////////////////////////////


// Part #4 //////////////////////////////
// Get id of Text field
var input1 = document.getElementById("keypress-input");

// Put inputted text into text box and output area
input1.addEventListener("keyup", function(){
  output.innerHTML = input1.value;
});
////////////////////////////////////////


// Part #5 /////////////////////////////
// Get Id of Add-color button 
var color = document.getElementById("add-color");

// Press Button and change color
color.addEventListener("click", function(){
  gPig.classList.add("turnBlue");
});
////////////////////////////////////////


// Part #6 /////////////////////////////
// Get Id of Hulkify button
var hulk = document.getElementById("make-large");

// Press Button and hulkify
hulk.addEventListener("click", function(){
  gPig.classList.add("ihulk");
});
////////////////////////////////////////


// Part #7 /////////////////////////////
// Get Id of Border Button
var border = document.getElementById("add-border");

// Press Button and create border
border.addEventListener("click", function(){
  gPig.classList.add("bord");
});
////////////////////////////////////////


// Part #8 /////////////////////////////
// Get Id of Rounded Button
var rounded = document.getElementById("add-rounding");

// Press button and round corners
rounded.addEventListener("click", function(){
  gPig.classList.add("roun");
});
////////////////////////////////////////
