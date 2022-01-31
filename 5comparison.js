var myAge = 19;
var herAge = 15;
// simple comparison
var whoAreBig = myAge > herAge; // ans true 
var whoAreBig = myAge >=  herAge; // ans true ( getter then or equal to)
var whoAreBig = myAge < herAge; // ans false
var whoAreBig = myAge <=  herAge;// ans false( less then or equal to)
var areWeSame = myAge == herAge; // ans false
var areWeSame = myAge != herAge; // ans true


/*------------------------------------------------------------------
            and = && , or = ||
            "and" orthat  sokol sortoi puron korte hobe
            "or "orthat sokol sorter kono akti puron korlei colbe
---------------------------------------------------------------------*/


var hoyBoroNahoySoto = myAge > herAge || myAge < herAge;;
var boroAbong20thekeBoro = myAge > herAge && myAge > 20;