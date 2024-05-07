function getFibonacci(n){
    if (n<1 || n>10){
        return "Not Allowed";
    }
    else if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 1;
    }
    else{
        return getFibonacci(n - 1) + getFibonacci(n - 2);
    }
}

let n = parseInt(prompt("Enter a valid number between 1 and 10: "));

if (isNaN(n)){
    console.log ("Not allowed, enter a number!");
}
else if(n<1 || n>10){
    console.log ("Not Allowed!");
}
else{
     let series = new Array(n);
     series.fill(0);
            
     for (let i = 1; i <= n; i++) {
         series[i - 1] = getFibonacci(i);
     }
     console.log(series);
}
