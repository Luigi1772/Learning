// console.log("kuku")
// const kuku = "kuku";
// var ole = 2;
// console.log( kuku + " " + ole)

// if(ole == 1)
// { 
//     console.log("ole jest równe jeden")
// }

// else
// {
//     console.log("ole jest różne od jeden") 
// }

const a = 1
const b = 2
const z = 3
const calculation = "dzielenie";

if(calculation == "dodwanie")
    console.log ( a + b + z )
if(calculation == "odejmowanie")
    console.log ( a - b - z )
if(calculation == "mnożenie")
    console.log ( a * b * z )
if(calculation == "dzielenie")
    console.log ( a / b / z )

const animals = ["kot", "pies", "ptak"];
console.log(animals[2] + " " + animals [1]);
console.log(animals.length)

for(i = 0; i < animals.length; i++)
{
    console.log(animals[i]);
}

var day;
switch (new Date().getDay()) 
{
    case 0:
      day = "Monday";
      break;
    case 1 :
        day = "Thusday";
        break;
    case 5 :
        day = "Friday";
        break;
}  

console.log(day);

const dupa = String(a+b+z);

console.log(dupa)