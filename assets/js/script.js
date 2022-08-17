//---------------------------
//designate global variables
var submitBtn = $("#submitButton");
var movieCard = $(".movieCard");
var navSelector = $("#genrePicker");

//---------------------------

//----------------------------
//select which elements will be hidden on initial page load
// randomelement.hide();
//----------------------------

//----------------------------
//create a function to generate the movie cards based on the selected dropdown.
function generateCards() {
  //take the genre and grab the genre code to pull from database
  console.log(navSelector.value);
}
//----------------------------

//-----------------------------
//create a function to generate a modal containing the movie trailer pulled from youtube api
function trailerModal() {}
//---------------------------

//---------------------------
//add event listener to the movie card to run the trailerModal function to create a modal and display the youtube api corresponding movie trailer.
movieCard.on("click", function () {
  trailerModal();
});
//---------------------------

//---------------------------
//add event listener to the submit button on the top of the page to take the selected genre and run the generateCards function for that genre.
submitBtn.on("click", function (event) {
  event.preventDefault();
  generateCards();
});
//--------------------------
