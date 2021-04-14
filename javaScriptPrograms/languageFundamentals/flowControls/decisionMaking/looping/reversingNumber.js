

//-------Reversing a number---------
var num = 12345;
var rem=0;
var rev=0;

while (num>0) {
    rem=num%10; //extracting last digt ie.3
    rev=rev*10+rem;  //storing that extracted numbr into variable rev
    num=Math.floor(num/10)

}
console.log(`Reversed number is ${rev}`);


//123
//1*1*1+2*2*2+3*3*3
//amstrng
