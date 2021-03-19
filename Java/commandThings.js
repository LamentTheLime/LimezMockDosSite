let input = document.querySelector('input')


input.addEventListener('keyup', (e) => {
    if(e.code === 'Enter'){
        console.log(e.target.value);
        let pogger = toLowerCase(e.target.value)
        if (pogger === 'amogus'){
            amogusMommand()
        }else{
            invalidCommand(e.target.value)

        }
    }

})
function invalidCommand(thing){
    let outputPara = document.createElement("p")
    outputPara.setAttribute('class',"paragraph")
    document.body.appendChild(outputPara)
    outputPara.innerHTML = 'INVALID COMMAND "'+thing+'" <br/> MAKE SURE THE DIRECTORY HAS THE FORMAT VALUES SET ABOVE CORRUPTED NIL STATE <br/> YOU UNDERSTAND RIGHT :))';
} 
function amogusMommand(){
    let outputPara = document.createElement("object")
    outputPara.setAttribute('data','Images/Amogus.png')
    outputPara.setAttribute('width','80')

}