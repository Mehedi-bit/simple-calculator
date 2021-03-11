let display = document.getElementById("display");
let buttons = document.querySelectorAll('button');

let displayValue = '';
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function(event){
        let buttonText = event.target.innerText;
        console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            displayValue += buttonText;
            display.value = displayValue;

        }
        else if(buttonText == 'AC'){
            displayValue = '';
            display.value = displayValue;
        }
        else if(buttonText == '='){
            display.value = eval(displayValue);
        }
        else{
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
}