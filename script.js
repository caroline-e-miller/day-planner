// establish variables
var saveButton = $(".saveBtn");
var day = moment().format('MMMM Do YYYY');
var currentTime = moment().hour();
var past;
var future;
console.log(day);
// let sample = {
//     9:'wake up',
//     11: 'go to work',
//     13: 'walk home',
//     17: 'sleep'
// }
// var presentHour = moment().format('LLL');
// if time is equal to present, row style is red
// if time is lesser than present, row style is grey
// if time is greater than present, row style is green
// set up input 
// set up local storage for text which is dependent upon the save button click event
function planDay() {
    $("#currentDay").text(day);
    // if the text value of the present hour is equal to the text value of '.hour', use the '.present' class
    // var clockHour = $('.hour').text();

    $('.container .hour').each(function (index, timeSlot) {
        let fieldHour = $(timeSlot).text().split(':')[0]
        if (currentTime == fieldHour) {
            $(timeSlot).addClass('present');
            $(timeSlot).next().addClass('present');
        } else if (currentTime > fieldHour) {
            $(this).addClass('past');
            $(timeSlot).next().addClass('past');
        } else {
            $(this).addClass('future');
            $(timeSlot).next().addClass('future');
        }
    });

}

// var plans = $(".information");

$(".saveBtn").click(function () {
    var setPlans = JSON.parse(localStorage.getItem("plans") || '{}');
    var task = $(this).prev().val()
    var hour = $(this).prev().prev().text().split(':')[0].trim()

    setPlans[hour] = task
    localStorage.setItem("plans", JSON.stringify(setPlans));
})

function renderPlans() {
    var storedItems = JSON.parse(localStorage.getItem("plans") || '{}');

    $('.container .hour').each(function (index, timeSlot) {
        let fieldHour = $(timeSlot).text().split(':')[0].trim()
        if (storedItems[fieldHour]) {
            $(timeSlot).next().val(storedItems[fieldHour]);
        }
    });
    // if (storedItems !== undefined) {
    //     plans.val(storedItem)
    // }
}

planDay();
renderPlans();