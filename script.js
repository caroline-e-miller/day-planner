// establish variables
var day = moment().format('MMMM Do YYYY');
var present;
var past;
var future;
// if time is equal to present, row style is red
// if time is lesser than present, row style is grey
// if time is greater than present, row style is green
// set up input 
// set up local storage for text which is dependent upon the save button click event
function planDay() {
    $("currentDay").text(day);


}

var saveButton = $("#save");
var plans = $("#input");

$("#save").click(function () {
    var bigPlans = plans.text();
    console.log(bigPlans);
    event.preventDefault();

    var plansObj = {
        userPlans: plans.text()
    };

    localStorage.setItem("plansObj", JSON.stringify(plansObj));
})