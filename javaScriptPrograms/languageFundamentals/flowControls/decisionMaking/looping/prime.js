//--------- PRIME number -------
//ye tha mera logic-------
// var num=13;
// var count=0;
// for (let i = 1; i <= num; i++) {
//     if(num%i == 0){
//         count++;
//     }
// }
// console.log("Number of factors : "+count);
// if(count==2){
//     console.log(num+ " is prime number");
// }else{
//     console.log(num +" not prime number");
// }




//sir ke logic-------------

var num=13;
var count=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        count++;
        break;
    }
}
if(count==0){
    console.log("prime ");
}else{
    console.log("not prime");
}

