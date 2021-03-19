let input = document.querySelector('input')


input.addEventListener('keyup', (e) => {
    if(e.code === 'Enter'){
        let outputPara = document.createElement("p")
        outputPara.setAttribute('class',"paragraph")
        console.log(e.target.value);
        document.body.appendChild(outputPara)
        outputPara.innerHTML = 'INVALID COMMAND "'+e.target.value+'" <br/> REFER TO USER SETUP DISC <br/> OR: <br/> SHOVE THE MANUAL UP YOUR ASS :))';

    }

})
