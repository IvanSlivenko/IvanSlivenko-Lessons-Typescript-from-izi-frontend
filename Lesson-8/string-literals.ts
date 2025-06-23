type DayOfWeekLiteral =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "ThursDay"
  | "Friday"
  | "Saturday"
  | "Sunday";

function isWorkDayWithLiteral(day: DayOfWeekLiteral) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return `${day} It is not  workday`;
    default:
      return `${day} It is workday`;
  }
}


console.log(isWorkDayWithLiteral("Wednesday"));
console.log(isWorkDayWithLiteral("Saturday"));
console.log(isWorkDayWithLiteral("Friday"));

