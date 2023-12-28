/* POPUP TO BUY F&B OR CHECKOUT */
let popup = document.getElementById("popup");

function openPopup()
{
    popup.classList.add("open-popup");
}

function closePopup()
{
    popup.classList.remove("open-popup");
}


/* SEAT */
const container = document.querySelector(".seat-container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const movieSelect = document.getElementById("movie-seat");

populateUI();

function populateUI()
{
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          console.log(seat.classList.add("selected"));
        }
      });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
      console.log(selectedMovieIndex)
    }
}
console.log(populateUI())

// Seat click event
container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");

      updateSelectedCount();
    }
});