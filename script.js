// establish variables
var present;
var past;
var future;
var textInput;
// if time is equal to present, row style is red
// if time is lesser than present, row style is grey
// if time is greater than present, row style is green
// set up input 
// set up local storage for text which is dependent upon the save button click event
$(".saveBtn").click(function () {
    var plans = $("#input");
    var bigPlans = plans.text();
    console.log(bigPlans)

    localStorage.setItem("bigPlans", JSON.stringify(bigPlans));
})