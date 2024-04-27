/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costFullDay = 35;
let costHalfDay = 20;
let numberOfDays = 0;
let calculatedCostRaw = 0;

let monday = document.getElementById("monday");
let tuesday= document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");
let calculatedCost = document.getElementById("calcualted-cost");
let clear = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", function() {
        let mondayPrice = 0;
        if (monday.classList.contains("clicked")) {
            monday.classList.remove("clicked");
            if (mondayPrice ===1){
                mondayPrice = 0;
            }

        }

        else{
                monday.classList.add("clicked");
                if (mondayPrice ===0){
                    mondayPrice = 1;

                    if (mondayPrice === 1){
                        numberOfDays++;            
                    }
                }
        }
          
        
}); 

tuesday.addEventListener("click", function() {

    if (tuesday.classList.contains("clicked")) {
        tuesday.classList.remove("clicked");
    }

    else{
            tuesday.classList.add("clicked");
    }    
}); 

wednesday.addEventListener("click", function() {

    if (wednesday.classList.contains("clicked")) {
        wednesday.classList.remove("clicked");
    }

    else{
            wednesday.classList.add("clicked");
    }    
}); 
    
thursday.addEventListener("click", function() {

    if (thursday.classList.contains("clicked")) {
        thursday.classList.remove("clicked");
    }

    else{
        thursday.classList.add("clicked");
    }    
}); 


friday.addEventListener("click", function() {

    if (friday.classList.contains("clicked")) {
        friday.classList.remove("clicked");
    }

    else{
        friday.classList.add("clicked");
    }    
}); 


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear.addEventListener("click", function() {
    
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    numberOfDays = 0;
    calculatedCostRaw = 0;
    calculateCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener("click", function() {
    calculatedCostRaw = costHalfDay * numberOfDays;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener("click", function() {
    calculatedCostRaw = costFullDay * numberOfDays;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    calculatedCost.innerHTML = calculatedCostRaw;
}
