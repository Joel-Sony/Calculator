const keys= document.querySelectorAll(".key");

let firstOperandDigits=0;
let secondOperandDigits=0;
let firstOperand;

let firstOperandFlag=1;
let secondOperandFlag=0;
let secondOperand;
let operator;
let operatorPressedId;

let decimalFlag=0;

keys.forEach((key)=>{
    key.setAttribute("type","button");
    key.addEventListener("click",(e)=> {
        console.log(e.target.className);
        console.log(e.target.innerText);
        let keyClass = e.target.className;
        let keyText = e.target.innerText;
        let screen =document.getElementById("screen")

        if(keyClass=== "key operand"){
            if(firstOperandDigits<9 && firstOperandFlag==1){
                screen.firstChild.textContent+=keyText;
                firstOperandDigits++;
                screen.firstChild.textContent=screen.firstChild.textContent;
            }
            else if(secondOperandDigits<9 && secondOperandFlag==1){
                screen.firstChild.textContent+=keyText;
                secondOperandDigits++;
                screen.firstChild.textContent=screen.firstChild.textContent;
            }
        }

        else if(keyClass ==="key clear"){
            screen.firstChild.textContent = '';
            firstOperandDigits = 0;
            secondOperandDigits = 0;
            firstOperandFlag = 1;
            secondOperandFlag = 0;
            decimalFlag = 0;
            operatorPressedId && operatorPressedId.classList.remove("pressed")
        }
        else if(keyClass==="key operator"){
            operatorPressedId=document.getElementById(`${e.target.id}`)
            operatorPressedId.classList.add("pressed");
            if(keyText=='%'){
                screen.firstChild.textContent=firstOperand/100;
            }
            else{
                if(decimalFlag==1) {
                    firstOperand=parseFloat(screen.firstChild.textContent);
                }
                else{
                    firstOperand=parseInt(screen.firstChild.textContent);
                   
                }
                screen.firstChild.textContent='';
                firstOperandDigits=0;
                operator=keyText;
                firstOperandFlag=0;
                secondOperandFlag=1;
            }    
        }
        else if(keyClass=="key signChange"){
            if(screen.firstChild.textContent==''){
            }
            else if(screen.firstChild.textContent[0]=='-') {
                screen.firstChild.textContent=screen.firstChild.textContent.slice(1,screen.firstChild.textContent.length);
            }
            else{
                screen.firstChild.textContent= "-".concat("",screen.firstChild.textContent);
            }
        }
        else if(keyClass=="key equals"){
            if(!screen.firstChild.textContent=='' && !secondOperandFlag==0){
                if(decimalFlag==1) secondOperand=parseFloat(screen.firstChild.textContent);
                else secondOperand=parseInt(screen.firstChild.textContent);
                let result=0;
                switch(operator){
                    case('+'):{
                        result=firstOperand+secondOperand;
                        break;
                    }
                    case('-'):{
                        result=firstOperand-secondOperand;
                        break;
                    }
                    case('*'):{
                        result=firstOperand*secondOperand;
                        break;
                    }
                    case('/'):{
                        result=firstOperand/secondOperand;
                        break;
                    }

                }
                let resultString = result.toString();
                if(resultString.length>10) resultString=resultString.slice(0,9);
                screen.firstChild.textContent=resultString;
                firstOperand = parseFloat(resultString);  

            }
            firstOperandFlag = 1;
            secondOperandFlag = 0;
            secondOperandDigits = 0;
            operatorPressedId.classList.remove("pressed");
            decimalFlag = 0;
        }
        else if(keyClass=="key decimal"){
            if(!screen.firstChild.textContent.includes('.')) {
                decimalFlag=1;
                screen.firstChild.textContent+='.';
            }
        }        
        console.log(`firstoperand: ${firstOperand} secondoperand: ${secondOperand}`)

})}
);
