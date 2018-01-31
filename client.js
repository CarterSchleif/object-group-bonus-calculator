$(document).ready(function(){
  $('#put-it-on').click(function(){
    $('.output').empty();
    putOnDom2();
  });
});


var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

console.log(employees[0].name);

function assignBonus(person){
  var newObject = {name: person.name};
  if(person.reviewRating <= 2){
    newObject.bonusPercentage = 0;
  } else if (person.reviewRating === 3){
    newObject.bonusPercentage = 0.04;
  } else if (person.reviewRating === 4){
    newObject.bonusPercentage = 0.06;
  } else if (person.reviewRating === 5){
    newObject.bonusPercentage = 0.1;
  }
  if(person.employeeNumber.length === 4){
    newObject.bonusPercentage += 0.05;
  }
  if(person.annualSalary > 65000){
    newObject.bonusPercentage -= 0.01;
  }
  if(newObject.bonusPercentage > 0.13){
    newObject.bonusPercentage = 0.13;
  }
  if(newObject.bonusPercentage < 0){
    newObject.bonusPercentage = 0;
  }

  newObject.totalBonus = Math.round(person.annualSalary * newObject.bonusPercentage);
  newObject.totalCompensation = '$'+(parseInt(person.annualSalary) + newObject.totalBonus);
  newObject.bonusPercentage = newObject.bonusPercentage * 100 + '%';
  newObject.totalBonus = '$'+newObject.totalBonus;
  return newObject;
}

function putOnDom2(){
  for(i = 0; i < employees.length; i++){ // this does one loop per employee
    //console.log(assignBonus(employees[i]));
    // get an array of the keys of each person object
    var keys = Object.keys(assignBonus(employees[i]));
    for (var k = 0; k < keys.length; k++) {
      $('.output').append('<p>');
      //$('.output p:last').css('border-top', '1px solid black');
      $('.output p:last').text(keys[k] + ': ' + assignBonus(employees[i])[keys[k]]);
    }
    $('.output p:last').append('<br>').css({'border-bottom':'1px solid black', 'margin-bottom':'40px'});
  }
}

function putOnDom1(){
  for(i = 0; i < employees.length; i++){ // this does one loop per employee
    $('.output').append(`<p>Name: ${assignBonus(employees[i]).name}<br>Bonus Percentage:  ${assignBonus(employees[i]).bonusPercentage}<br>Total Bonus:  ${assignBonus(employees[i]).totalBonus}<br>Total Compensation:  ${assignBonus(employees[i]).totalCompensation}</p>`);
  }
}
