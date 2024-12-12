const display = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let result = '';
let buttonArray = Array.from(buttons);

buttonArray.forEach(btn =>{
    btn.addEventListener('click',e=>{
        if(e.target.innerHTML =='DEL'){
            result = result.substring(0,result.length-1);
            display.value  = result;
        }
        else if(e.target.innerHTML == 'AC'){
            result = '';
            display.value = result;
        }
        else if(e.target.innerHTML == '='){
            result = eval(result);
            display.value = result;
        }
        else{
        result += e.target.innerHTML;
        display.value = result;
        }
    })
})