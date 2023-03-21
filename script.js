
let string = ""
let input = document.querySelector('.input_area')
let buttons = document.querySelectorAll('.btn')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1)
            document.querySelector('input').value = string
        }
        else{
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
       
    })
})

// function changeBG(color){
//     document.body.style.backgroundImage = color
// }
















































// const display1 = document.querySelector('.input_area')
// const tempresul = document.querySelector('.tempresult')
// const numbers = document.querySelectorAll('.number')
// const operations = document.querySelectorAll('.operation')
// const equal1 = document.querySelector('.equal')
// const clear = document.querySelector('.all-clear') 
// const last_clear = document.querySelector('.last-entity-clear')


// let dis1num = ''
// let dis2num = ''
// let result = null
// let lastoperation = ''
// let havedot = false

// numbers.forEach(number =>{
//     number.addEventListener('click',(e) =>{
//         if(e.target.innerText === '.' && !havedot){
//             havedot = true;
//         }
//         else if(e.target.innerText === '.' && havedot){
//             return;
//         }
//         dis2num += e.target.innerText;
//         document.querySelector('.input_area').value = dis2num
//     })
// })

// operations.forEach(operation =>{
//     operation.addEventListener('click',(e)=>{
//         if(!dis2num) return
//         havedot = false
//         const operationName = e.target.innerText
//         if(dis1num && dis2num && lastoperation){
//             mathOperation()
//         }
//         else{
//             result = parseFloat(dis2num)
//         }
//         clearVar(operationName)
//         console.log(result)
//     })
// })

// function clearVar(name =''){
//     dis1num += dis2num + ' ' + name + ' '
//     document.querySelector('.input_area').value = dis1num
//     display1.innerText = dis1num
// }