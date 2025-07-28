// 상수 : 항상 같은 수이며, 선언과 동시에 초기값을 설정한다.
const PI = 3.14;
var d = document;
// 변수 : 선언부
let radius;
let area;

// 변수 : 초기화부

radius = 0;
area = 0;

// 변수 : 구현부
radius = prompt("반지름을 입력하세요.");
area = PI * radius * radius;
view = typeof(area);

// 출력부
console.log(area);
d.getElementById("result1").innerHTML = `${radius} x ${radius} = ${area}`
d.getElementById("result2").innerHTML = `typeof : ${view}`