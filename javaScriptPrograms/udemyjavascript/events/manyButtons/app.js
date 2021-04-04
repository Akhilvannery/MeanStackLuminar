const btn = document.querySelectorAll("button");

const randomrgb = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

for(let button of btn){
    btn.addEventListener("click",function () {
        const newcolor = randomrgb();
        button.style.backgroundcolor = newcolor;
    });
}