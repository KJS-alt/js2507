function start() {
let userNumber = parseInt(prompt("몇 까지 3의 배수를 찾을까요?"));
let count = 0;
let result = [];

if (!isNaN(userNumber)) {
    for (let i = 1; i <= userNumber; i++){
        if (i % 3 === 0) {
            count++;
            result.push(i);
        }
    }
    document.getElementById("result1").innerHTML = result;
    document.getElementById("result2").innerHTML = `<p>${userNumber}까지 3의 배수의 갯수 : ${count}</p>`;
}
}