let select=document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then((res)=>display(res))

function display(res){
    // console.log(Object.entries(res)[1][0])
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let option=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option
    }   
}
btn.addEventListener('click',()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if(curr1===curr2)
      alert("Choose different currencies")
    else
      convert(curr1,curr2,inputVal)
  });
  
function convert(curr1, curr2, inputVal) {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${curr1}&symbols=${curr2}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(Object.entries(data.rates)[0][1]) by using array
        //by using value
        // console.log(Object.values(data.rates)[0])
        document.getElementById('result').value=Object.values(data.rates)[0]
      });
    }
  
  






