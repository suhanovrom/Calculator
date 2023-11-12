let result = document.querySelector("h1");
let ac = document.querySelector(".ac");
let operators = document.querySelectorAll(".operators");
let number = document.querySelectorAll(".number");
for (let value of number){
    value.addEventListener("click", function() {
        result.textContent  += value.textContent;
    });
}
for(let value of operators){
    switch(value.textContent){
        case "÷":
            value.addEventListener("click", function() {
                result.textContent += "/";
            });
            break;
        case "×":
            value.addEventListener("click", function() {
                result.textContent += "*";
            });
            break;
        case "√":
            value.addEventListener("click", function() {
                if (eval(result.textContent) < 0){
                    alert("нельзя вычеслить корень");
                    result.textContent = "";
                }else{
                    let a = Math.sqrt(eval(result.textContent));
                    result.textContent = a.toFixed(2);
                }
            });
            break;
        case "Π":
            value.addEventListener("click", function() {
                result.textContent += Math.PI.toFixed(2);
            });
            break;
        case "=":
            value.addEventListener("click", function() {
                if(((result.textContent.includes("/0") == true) && (result.textContent.includes("/0.") == false)) || (result.textContent == "0/0")){
                    alert("На 0 делить нельзя");
                    result.textContent = "";
                }else if((eval(result.textContent) ==  Infinity) || (eval(result.textContent) == -Infinity)){
                    alert("Вы немного переборщили");
                    result.textContent = "";
                }else if(result.textContent == "3.12"){
                    result.textContent = "Happy Birthday Dad";
                }else{
                    result.textContent = eval(result.textContent);
                } 
            });
            break;
        default:
            value.addEventListener("click", function() {
                result.textContent  += value.textContent;
            });
            break;
    }
}
document.addEventListener('keydown', function(e) {
    for(let value of number){
        if(e.key == value.textContent){
            result.textContent += value.textContent;
        }
    }
    for(let value of operators){
        if((e.key == value.textContent) && (e.key != "=")){
            result.textContent += value.textContent;
        }
    }
    if (e.key == "*"){
        result.textContent += "*";
    }else if(e.key == "/"){
        result.textContent += "/"
    }else if(e.code == "Backspace"){
        result.textContent = result.textContent.slice(0,-1);
    }else if (e.code == "Enter"){
        if((eval(result.textContent) == Infinity) || (result.textContent == "0/0") || (eval(result.textContent)  == -Infinity)){
            alert("На 0 делить нельзя");
            result.textContent = ""
        }else if(result.textContent == "3.12"){
            result.textContent = "Happy Birthday Dad"
        }else{
            result.textContent = eval(result.textContent);   
        }
    }else if(e.key == "p"){
        result.textContent += Math.PI.toFixed(2);
    }
  });

ac.addEventListener("click", function() {
    result.textContent = "";
});
