// var diclare kore name set kore then equal sign er pore tird brakket diye sokol object-property and value  dei property and value er moddhe colon dei and sokol object property er pore comma dia alada kori 
var myTeam = {
  siam : 'batsman',
  sakib : 'all-raounder',
  ali  : 'bowler',
  nasim : 'keeper', //prottek property er pore colon diye tar por value define
}
 myTeam.siam = myTeam['sakib']   // 2 bhabei property value khuje paoya jay 
console.log(myTeam.sakib) //objectName dot objectProperty  
//console.log(myTeam['sakib']) dileo aki kotha

//change property value
myTeam.siam = 'all-rounder'
console.log(myTeam)