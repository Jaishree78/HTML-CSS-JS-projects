let ampnm= document.getElementById("ampm")
function display(){
    let date=new Date()
    let hr=date.getHours()
    let min=padzero(date.getMinutes())
    let sec=padzero(date.getSeconds())
    if(hr>12){
        hr-=12
        ampm.innerHTML="PM"
    }
    document.getElementById("hours").innerHTML=padzero(hr)
    document.getElementById("mins").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
}
function padzero(num){
    return num<10?"0"+num:num
}
setInterval(display,500)