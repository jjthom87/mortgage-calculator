let months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
let month;
let monthNumber;

let extraMonth = "October";
switch(extraMonth){
  case "January":
    month = "January";
    monthNumber = 0;
    break;
  case "February":
    month = "February";
    monthNumber = 1;
    break;
  case "March":
    month = "March";
    monthNumber = 2;
    break;
  case "April":
    month = "April";
    monthNumber = 3;
    break;
  case "May":
    month = "May";
    monthNumber = 4;
    break;
  case "June":
    month = "June";
    monthNumber = 5;
    break;
  case "July":
    month = "July";
    monthNumber = 6;
    break;
  case "August":
    month = "August";
    monthNumber = 7;
    break;
  case "September":
    month = "September";
    monthNumber = 8;
    break;
  case "October":
    month = "October"
    monthNumber = 9;
    break;
  case "November":
    month = "November";
    monthNumber = 10;
    break;
  case "December":
    month = "December";
    monthNumber = 11;
    break;
}

months.splice(monthNumber, 0, month);
console.log(months);
