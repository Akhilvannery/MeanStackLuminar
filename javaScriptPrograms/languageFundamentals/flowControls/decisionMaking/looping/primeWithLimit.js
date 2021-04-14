// var lower=2;
// var upper=25;
// let flag=0;

// for (let i = lower; i <= upper; i++ ) {
//    for (var j = 2; j < i; j++) {
//        if(i%j==0){
//            break;
//        }else{
//            console.log(i);
//        }
       
//    }
  
   
// }

var flag=0;
var count=0;
var lower=2;
var upper=28;
for (let i = lower; i <= upper; i++) {
    
    for(let j=2;i<i;j++){
        if(i%j==0){
            count++;
            break;
        }
    }
    if(count==0){
        console.log(i);
    }else{
        console.log("not prime");
    }
    
        
}
