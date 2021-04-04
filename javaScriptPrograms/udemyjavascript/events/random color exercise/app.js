const btn = document.querySelector("#btn1");
const heading = document.querySelector("#h1");

btn.addEventListener("click",function () {
    // document.body.style.backgroundColor = "olive";

    const newcolor=randomColor()
    document.body.style.backgroundColor = newcolor;
    heading.innerHTML=newcolor;
})
const randomColor = () => {
    const r = Math.floor( Math.random() * 255 );
    const g = Math.floor( Math.random() * 255 );
    const b = Math.floor( Math.random() * 255 );
    //rgb(255,255,255)
    return  `rgb(${r},${g},${b})`;
    
}
