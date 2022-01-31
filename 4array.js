var myTeam = ['siam' , 'sakib' , 'ali' , 'nasim' , 'josim' , 'kasim'];

var memberCount = myTeam.length ;// array er upadan sonkha nirdesh kore
 
//array index sobsomoy 0 theke count suru kore 1no position e index er man 0 , 2no e 1 .... and jader kono possition nai array te nai tader index = -1 ;
var  aliIndex = myTeam.indexOf('ali');

// index bebohar kore array er upadan jana
var fourthPerson = myTeam[3]; 

// kono upadan er replace
myTeam[4] = 'bisal' ; 

myTeam.push('riaz') // array er ses upadan hisabe kawke add kora
myTeam.pop() // array er ses upadanke kete fela
myTeam.unshift('riaz') // array er prothom upadan hisabe kawke add kora
myTeam.shift() //array er prothom upadanke kete fela


//new kono array er sathe puran kono array jog korate hole airup concat kore kora hoy
var newTeam = ['jhankar mahbub' , 'code with herry' ,'hm nayem'].concat(myTeam)
