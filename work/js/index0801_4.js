let text = "Outside: " + typeof carName;
console.log(text);
document.getElementById("demo1").innerHTML = `<p style="font-weight:bold;">carName 선언 전 : </p>${text} `

function myFunction() {
    let carName = "Volvo"
    let text = "Inside: " + typeof carName + " " + carName;
    console.log(text);
    document.getElementById("demo2").innerHTML = `<p style="font-weight:bold;">myFunction() 함수에서 carName 선언 후  : </p>${text} `
}

myFunction();