// aki kaj bar bar korte loop bebohar kora hoy
var myAge  = 19;
while(myAge <= 36){
  console.log( 'my age is',myAge ,',i am yuung')
  myAge++
}

for(let i = myAge ; i > 36 && i < 70 ; i++){
  console.log('my age is ', i , ',i am being buira')
}


var myTeam = ['siam' , 'sakib' , 'ali' , 'nasim' , 'josim' , 'kasim'];
for( var i = 0 ; i < myTeam.length; i++ ){
  console.log(myTeam[i])
}

//loop er moddhe jodi kono condition deya hoy and oi condition e break use kora hoy tobe condition sotto howa porjonto loop colbe tarpor break korbe orthat loop ar colbe na ....

var j =  0 ;
while(j < 100){
  console.log(j)
  if(j == 10){//condition sotto hole loop oikhanei break
    break
  }
  j++
}

