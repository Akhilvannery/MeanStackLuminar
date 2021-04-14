///-------HW
//var array[]=[2,3,4,5,6,7]
//var num=6;
 //(2,4)

 var arr=[2,3,4,5,6,7,8,9];
 var num=6;

 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]+arr[j] == num){
            if(arr[i]==arr[j]){
                break;
            }
            console.log(`(${arr[i]} , ${arr[j]})`);
        }
        
    }
     
 }