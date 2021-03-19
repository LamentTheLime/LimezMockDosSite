let input = document.querySelector('input')
let outputPara = document.getElementById("ouputParagraph")

input.addEventListener('keyup', (e) => {
    if(e.code === 'Enter'){
        console.log(e.target.value);
        outputPara.innerHTML = 'INVALID COMMAND "'+e.target.value+'" <br/> REFER TO USER SETUP DISC <br/> OR: <br/> SHOVE THE MANUAL UP YOUR ASS :))';

    }

})
