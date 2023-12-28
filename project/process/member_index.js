/* SLIDESHOW */
let slideIndex = 1;
showSlides(slideIndex);

// Next & prev
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("slide-item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

showSlides();
function showSlides()
{
    let i;
    let slides = document.getElementsByClassName("slide-item");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


/* CATEGORY FILTER BUTTON */
filterSelection("all");
function filterSelection(c)
{
    var x, i;

    x = document.getElementsByClassName("movie-item");
    if (c == "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "show");
        }
    }
}

function w3AddClass(element, name)
{
    var i, arr1, arr2;

    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name)
{
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

// Highlight current button as an active button
var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("filter-button");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log(current);
    });
}


/* SEARCH BAR FILTER */
let cards = document.querySelectorAll('.movie-item');
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    
    // Use innerText if all contents are visible
    // Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase() 
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } 
        else {
            cards[i].classList.add("is-hidden");
        }
    }
}

// A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});