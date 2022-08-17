//---------------------------
//designate global variables
var submitBtn = $("#submitButton");
var movieCard = $(".card");
var navSelector = $("#genrePicker");
var cardholder = $("#cardholder");
var youtubeUrl =
  "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?";
var videoModal = $("#videoModal");


//---------------------------

//----------------------------
//select which elements will be hidden on initial page load
cardholder.hide();
//----------------------------

//----------------------------
//create a function to generate the movie cards based on the selected dropdown.
function generateCards() {
  //take the genre and grab the genre code to pull from database
  console.log(navSelector.value);
  cardholder.show();
}
//----------------------------

//-----------------------------
//create a function to generate a modal containing the movie trailer pulled from youtube api
function trailerModal() {
  //---------------------------
  var src = "https://www.youtube.com";
  $("#videoModal").modal("show");
  $("#videoModal iframe").attr("src", src);
}
//---------------------------
//add event listener to the movie card to run the trailerModal function to create a modal and display the youtube api corresponding movie trailer.
movieCard.on("click", function (event) {

  // event.preventDefault();

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

//---------------------
//Set fetch for youtube api
function getYTApi(youtubeUrl) {
  fetch(youtubeUrl).then(function (response) {
    console.log(response);
  });
}
