function processInput(){

    //Getting the values from the input fields
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    //Converting the input values to numbers
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    //Checking if the input is valid
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        alert("Enter a valid number!");
        return;
    } 

    //Displaying the numbers
    console.log("First number is: " + firstNumber);
    console.log("Second number is: " + secondNumber);
}

//Functions for each operation
function sum() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let sum = firstNumber + secondNumber;
    console.log("Sum is: " + sum);
}

function difference(){
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let difference = firstNumber - secondNumber;
    console.log("Difference is: " + difference);
}

function multiplication(){
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let product = firstNumber * secondNumber;
    console.log("Product is: " + product);
}

function division(){
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let division = firstNumber / secondNumber;
    console.log("Division result is: " + division);
}

function remainder(){
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let remainder = firstNumber % secondNumber;
    console.log("The remainder is: " + remainder);
}