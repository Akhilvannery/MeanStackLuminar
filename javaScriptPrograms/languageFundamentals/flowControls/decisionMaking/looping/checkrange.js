//
//checking whether the power of num comes between upper n lower limit...if yes print num..
//
//

var num=2;
var lowerlimit=8;
var upperlimit=28;


var pow=num**num;
console.log("power : "+pow);

if(pow>lowerlimit && pow<upperlimit){
    console.log("number is "+num);
}else{
    console.log("invalid");
}