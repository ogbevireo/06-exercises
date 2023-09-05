let age = Math.floor(Math.random() * 99)
const isHoliday = Math.floor(Math.random() * 2)

let discount = () => {
  if (age <= 6 || age >= 65 && isHoliday === 0) {
    return `Discount applied. You are: ${age} years old & it's not a holiday!`;
    return `${isHoliday}`;
  } else if (age <= 6 || age >= 65 && isHoliday === 1) {
    return `No Discount applied. You are: ${age} years old & it is a holiday!!!`;
    return `${isHoliday}`;
  } else {
    return `No Discount applied. You are: ${age} years old`;
    return `${isHoliday}`;
  }
}
console.log(discount(age, isHoliday));
// console.log(isHoliday)


