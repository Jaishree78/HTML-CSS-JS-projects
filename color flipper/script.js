let btn=document.getElementById("btn");
let wrapper=document.getElementById("wrap");
let color=document.getElementById("color");
// btn.addEventListener('click',change);
let hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function hexadecimal(){
    let hexa=Math.floor(Math.random()*16);
    return hex[hexa]
}
btn.addEventListener('click',function(){
    let code="#"
    for(let i=1;i<=6;i++){
        code+=hexadecimal()
    }
    color.innerHTML=code
    wrapper.style.background=code
})

