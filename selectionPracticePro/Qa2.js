function isLeapYear() {
    let year = 2000;
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return year + " is a leap year.";
    } else {
      return year + " is not a leap year.";
    }
  }
  
  // Test the function
 // var inputYear = prompt("Enter a year:");
  var result = isLeapYear();
  console.log(result);