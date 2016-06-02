$(document).ready(function() {

  var isoceles = function(side1,side2,side3){
    return side1===side2 || side1===side3 || side2===side3;
  }

  var equilateral = function(side1,side2,side3){
    return side1===side2 && side1===side3;
  }

  var scalene = function(side1,side2,side3){
    return side1 != side2 && side1 != side3 && side2 != side3;
  }

  $("form#triangle").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($('#side1').val());
    var side2 = parseInt($('#side2').val());
    var side3 = parseInt($('#side3').val());

    if((side1 >= side2+side3)||(side2 >= side1+side3)||(side3 >= side2+side1)){
      $("#typeoftriangle").text("not a");
    } else if(equilateral(side1,side2,side3)===true){
      $("#typeoftriangle").text("an equilateral");
    } else if(isoceles(side1,side2,side3)===true){
      $("#typeoftriangle").text("an isoceles");
    } else {
      $("#typeoftriangle").text("a scalene");
    }


    $('#output').show();
  });
});
