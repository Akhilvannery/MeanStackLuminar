// document.body.style.backgroundColor="red";

// ------------------NORMAL METHOD------------------

// setTimeout( () => {
//     document.body.style.backgroundColor="red";
// },1000);
// setTimeout( () => {
//     document.body.style.backgroundColor="orange";
// },2000);
// setTimeout( () => {
//     document.body.style.backgroundColor="green";
// },3000);
// setTimeout( () => {
//     document.body.style.backgroundColor="blue";
// },4000);


// ---------------NESTED METHOD----------------

// setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "red";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "olive";

//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


//------------USING A FUNCTION------------------
const rainbowcolor = (color, delay, donext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        donext();
    }, delay);
}

rainbowcolor("green", 1000, () => {
    rainbowcolor("orange", 1000, () => {
        rainbowcolor("blue", 1000, () => {
            rainbowcolor("yellow", 1000, () => {
                rainbowcolor("red", 1000, () => {
                    rainbowcolor("teal", 1000, () => {

                    })
                })
            })
        })
    })
});
