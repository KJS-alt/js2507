// let myFunction = function(a,b) {
//     return a*b;
// }

// 화살표 함수
myFunction = (a, b) => a * b;


let result = myFunction(4, 3);

console.log(result);
document.getElementById("demo").innerHTML = `<p style=font-weight:bold>myFunction = function(a,b) <br> myFunction(4,3)</p>a*b = ${result}`