enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  ThursDay = "ThursDay",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWokday(day: DayOfWeek) {
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
