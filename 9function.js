function example(perameter){

var returnItem= 50 + perameter
return returnItem//function er folafol
}
example("upadan")//function call
var total = example(20)//function e return set kora thakle tobei oi function ke call kore vaiable er moddhe rakha jay
console.log(total)
// 2nd example
function canIBuy(taka){
  var i =taka;
  if(i > 5){
  return true
}
return false
}

var cani = canIBuy(8)
console.log(cani)
//multiple perameters

function JogfolOfThatsNumber(pera1 , pera2 , pera3){
  var sum = pera1 + pera2+ pera3;
  return sum;
}
var totalAgeOfMySelfMyWifeMySon  = JogfolOfThatsNumber(30 , 24 , 2); //serial onojai ak ak ta perameter function er parameter er jaygay bose jabe
console.log(totalAgeOfMySelfMyWifeMySon)