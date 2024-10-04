const keys= document.querySelectorAll(".key");

let firstOperandDigits=0;
let secondOperandDigits=0;
keys.forEach((key)=>{
    key.setAttribute("type","button");
    key.addEventListener("click",(e)=> {
        console.log(e.target.className);
        console.log(e.target.innerText);
        let keyClass = e.target.className;
        let keyText = e.target.innerText;
        let screen =document.getElementById("screen")

        if(keyClass=== "key operand"){
            if(firstOperandDigits<9)
            screen.firstChild.textContent+=keyText;
            firstOperandDigits++;
        }
    })}
);
