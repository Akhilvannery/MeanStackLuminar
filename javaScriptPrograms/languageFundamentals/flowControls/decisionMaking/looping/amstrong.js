//123
//1*1*1+2*2*2+3*3*3
//amstrng


var num=123;
var rem=0;  sum=0;
while(num>0){
    rem=num%10;
    sum+=(rem*rem*rem);
    num=Math.floor(num/10);
}
console.log(sum);