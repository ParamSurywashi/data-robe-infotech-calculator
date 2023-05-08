function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var resultElement = document.getElementById("result");
    var errorMsg = document.getElementById("errorMsg");
    errorMsg.innerText ="";


    if (isNaN(num1) || isNaN(num2)) {
        errorMsg.innerText = "Please enter valid numbers.";
        return;
    }
    

    var result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    }else if (operation === "division") {
        result = num1 / num2;
    }else if (operation === "multiply") {
        result = num1 * num2;
    }

    resultElement.innerText = result;
}