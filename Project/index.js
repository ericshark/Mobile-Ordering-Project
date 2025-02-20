const screen = document.getElementById('screen')
document.addEventListener('click',function(e){
    const btn = e.target
    const valid = ['+','-','/','*']
    if (btn.tagName==='BUTTON'){
        if (btn.value==='='){
            screen.value = eval(screen.value)
        }
        else if(btn.value==='C'){
            screen.value=''
        }
        else if(valid.includes(btn.value)){
            let last = btn.value
            
        }
        else{

            screen.value+=btn.value
        }
    }
    
})
