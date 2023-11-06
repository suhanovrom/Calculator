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
one.addEventListener("click", function() {
    result.textContent += "1";
});
two.addEventListener("click", function() {
    result.textContent += "2";
});
three.addEventListener("click", function() {
    result.textContent += "3";
});
four.addEventListener("click", function() {
    result.textContent += "4";
});
five.addEventListener("click", function() {
    result.textContent += "5";
});
six.addEventListener("click", function() {
    result.textContent += "6";
});
seven.addEventListener("click", function() {
    result.textContent += "7";
});
eight.addEventListener("click", function() {
    result.textContent += "8";
});
nine.addEventListener("click", function() {
    result.textContent += "9";
});
zero.addEventListener("click", function() {
    result.textContent += "0";
});
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
    result.textContent = eval(result.textContent);
});
ac.addEventListener("click", function() {
    result.textContent = "";
});