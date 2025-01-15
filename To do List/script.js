let input=document.getElementById('input')
let btn=document.getElementById('add')
let todolist=document.getElementById('todoList')
//local storage,cookies
let todos=[]
//retrieving and displaying in local storage
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => display(todo));
}


btn.addEventListener('click',()=>{
    todos.push(input.value)
     //storing in local storage
    localStorage.setItem('todos',JSON.stringify(todos)) 
    display(input.value)
    input.value=''
})

function display(todo){
    let para=document.createElement('p')
    para.innerText=todo
    todolist.appendChild(para)
    // localStorage.setItem('todos',JSON.stringify(todos))
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo)
    })
}
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1)
         todos.splice(index,1)
        // localStorage.clear
    localStorage.setItem('todos',JSON.stringify(todos)) 
}
// to remember our data need to use local storage
