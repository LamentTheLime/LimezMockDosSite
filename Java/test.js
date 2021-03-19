let input = document.querySelector('input')

input.addEventListener('keyup', (e) => {
    if(e.key === Enter){
        console.log(e.target.value)

    }

})