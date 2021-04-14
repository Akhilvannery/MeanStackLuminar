var arr = [5,6,0,1,0,3];
var count=0;
arr.sort();
 
//------to print array--------
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log('second largest num is '+ arr[(arr.length-2)]);
