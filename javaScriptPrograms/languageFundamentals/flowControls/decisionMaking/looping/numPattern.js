//-----------------------
//     i/p=2
//     o/p=2+22 = 24
//         3+33+333=369
//(num*10)+3
var num=2;
var i=1;
var res=0;
var sum=0;

// while (i<=num) {
//     res=res*10+num;
//     i++;
//     console.log(res);
// }
// console.log(res);

for (let i = 1; i <= num; i++){

    res=res*10+num;
    sum=sum+res;
    
    console.log(res);
}
console.log("sum : "+sum);