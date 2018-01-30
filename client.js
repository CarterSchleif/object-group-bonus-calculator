var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);



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
  newObject.totalCompensation = parseInt(person.annualSalary) + newObject.totalBonus;
  newObject.bonusPercentage = newObject.bonusPercentage * 100 + '%';
  return newObject;
}

for(i = 0; i < employees.length; i++){
  console.log(assignBonus(employees[i]));
}
