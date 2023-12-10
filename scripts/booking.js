/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 35;
var numberOfDay = 0;
var clearButton = document.getElementById("clear-button");
var daySelector = document.querySelectorAll(".day-selector li");
var fullButton= document.getElementById("full");
var halfButton = document.getElementById("half");
var costContent = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daySelector.forEach(function (clickday) {
    clickday.addEventListener('click', function () {
        if (!clickday.classList.contains('clicked')) {
            clickday.classList.toggle('clicked');
            numberOfDay++;
            calculationCost();
        } else {
            clickday.classList.remove('clicked');
            numberOfDay--;
            calculationCost();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function() {
    daySelector.forEach(function(daySelector) {
        daySelector.classList.remove("clicked");
        numberOfDay=0;
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
        calculationCost();
});
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click",halfday_click);
function halfday_click (){
    costPerDay = 20;
    halfButton.classList.toggle("clicked");
    fullButton.classList.remove("clicked");
    calculationCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click",fullday_click);
function fullday_click(){
    costPerDay = 35; 
    fullButton.classList.toggle("clicked");
    halfButton.classList.remove("clicked");
    calculationCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculationCost(){
    costContent.innerHTML = costPerDay*numberOfDay;
}
