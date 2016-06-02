$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($('#side1').val());
    var side2 = parseInt($('#side2').val());
    var side3 = parseInt($('#side3').val());

    if((side1 >= side2+side3)||(side2 >= side1+side3)||(side3 >= side2+side1)){
      $("#typeoftriangle").text("not a");
    } else if(side1===side2 && side2===side3){
      $("#typeoftriangle").text("an equilateral");
    } else if(side1===side2 || side2===side3 || side3===side1){
      $("#typeoftriangle").text("an isoceles");
    } else {
      $("#typeoftriangle").text("a scalene");
    }


    $('#output').show();
  });
});
