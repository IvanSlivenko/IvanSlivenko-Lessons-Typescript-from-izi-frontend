"use strict";
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["ThursDay"] = "ThursDay";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWokday(day) {
    switch (day) {
        case DayOfWeek.Saturday:
        case DayOfWeek.Sunday:
            return "It is not a workday";
        default:
            return "It is a workday";
    }
}
console.log(isWokday(DayOfWeek.Monday));
console.log(isWokday(DayOfWeek.Saturday));
