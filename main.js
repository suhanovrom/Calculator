let result = document.querySelector("h1");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let divide = document.querySelector(".divide");
let equals = document.querySelector(".equals");
let multi = document.querySelector(".multi");
let ac = document.querySelector(".ac");
let bracket1 = document.querySelector(".bracket1");
let bracket2 = document.querySelector(".bracket2");
let dot = document.querySelector(".dot");
let operators = document.querySelectorAll(".operators");
bracket1.textContent = "(";
bracket2.textContent = ")";
bracket1.style.color = "white";
bracket2.style.color = "white";
let number = document.querySelectorAll(".number");
for (let value of number){
    value.addEventListener("click", function() {
        result.textContent  += value.textContent;
    });
}

plus.addEventListener("click", function() {
    result.textContent += "+";
});
minus.addEventListener("click", function() {
    result.textContent += "-";
});
multi.addEventListener("click", function() {
    result.textContent += "*";
});
divide.addEventListener("click", function() {
    result.textContent += "/";
});
equals.addEventListener("click", function() {
    if((eval(result.textContent) == Infinity) || (result.textContent == "0/0") || (eval(result.textContent)  == -Infinity)){
        alert("На 0 делить нельзя");
        result.textContent = ""
    }else if(result.textContent == "3.12"){
        result.textContent = "Happy Birthday Dad"
    }else{
        result.textContent = eval(result.textContent);
    }
    
    
});
ac.addEventListener("click", function() {
    result.textContent = "";
});
dot.addEventListener("click", function() {
    result.textContent += ".";
});
bracket1.addEventListener("click", function() {
    result.textContent += "(";
});
bracket2.addEventListener("click", function() {
    result.textContent += ")";
});
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
    }
  });