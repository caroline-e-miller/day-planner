// establish variables
var day = moment().format('MMMM Do YYYY');
var presentHour = moment().format('LLL');
var currentTime = moment().format('h');
var past;
var future;
// if time is equal to present, row style is red
// if time is lesser than present, row style is grey
// if time is greater than present, row style is green
console.log(day);
// set up input 
// set up local storage for text which is dependent upon the save button click event
function planDay() {
    $("#currentDay").text(day);
    // if the text value of the present hour is equal to the text value of '.hour', use the '.present' class
    var clockHour = $('.hour').text();

    // console.log(clockHour);
    // console.log(presentHour);

    $('.container .hour').each(function () {
        if (clockHour === currentTime) {
            $(this).css('.present');
        } else if (clockHour < presentHour) {
            $(this).css('.past');
        } else {
            $(this).css('.future');
        }
    });


}
planDay();

// var saveButton = $(".saveBtn");
// var plans = $("#input");
// var experiment = saveButton.prev();
// console.log(experiment);

// $(".saveBtn").click(function () {
//     $("#input").siblings();
//     // console.log(this);
//     var setPlans = $(this).text();
//     // console.log(setPlans);

//     localStorage.setItem("setPlans", JSON.stringify(setPlans));
// })

var saveButton = $(".saveBtn");
var plans = $(".information");

$(".saveBtn").click(function () {
    // event.preventDefault();
    // $(".information").each(function () {
    //     var specifyPlans = $(this).plans;
    //     console.log(specifyPlans);
    // })

    var setPlans = plans.val();
    console.log(setPlans)
    // event.preventDefault();

    // var plansObj = {
    //     userPlans: setPlans
    // };

    localStorage.setItem("plans", JSON.stringify(setPlans));
    // var storedItem = localStorage.getItem("plans");
})

function renderPlans() {
    var storedItem = localStorage.getItem("plans");
    setPlans = storedItem;
}
renderPlans();