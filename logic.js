let display = document.getElementById("display");
let buttons = document.querySelectorAll('button');
for (const item of buttons) {
    item.addEventListener('click', (event){
        buttonText = event.target.innerText;
    }
}