var leapYear = function(year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else if (year === "" || year === null || year === NaN) {
    return false;
  } else {
    return false;
  }
};


$(document).ready(function() {

  $("form#userNumber").submit(function(event){
    event.preventDefault();

    var year = parseInt($("#userInput").val());
    var result = leapYear(year);

    $("#result").text(result);

  });
});
