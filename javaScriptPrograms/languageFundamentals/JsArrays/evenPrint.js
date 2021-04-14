//push even nos to EvenArray and odd nos to odd array


var arr=[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var arrEven=[];
var arrOdd=[];
for(let num of arr){
    if(num%2==0){
        arrEven.push(num);
    }else{
        arrOdd.push(num);
    }
}

console.log("Even Array : "+arrEven);
console.log("Odd Array : "+arrOdd);

///-------HW
//var array[]=[2,3,4,5,6,7]
//var num=6;
 //(2,4)