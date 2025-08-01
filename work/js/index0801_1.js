function myFunction(p1, p2){
    return p1 * p2;
}

let result = myFunction(4, 3);

console.log(result);
document.getElementById("demo").innerHTML = `<p style = "font-weight:bold;">myFunction(p1, p2) <br> myFunction(4, 3)</p> The result is: 4 * 3 = ${result}`