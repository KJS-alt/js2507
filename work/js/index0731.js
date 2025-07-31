function start() {
    let userNumber = parseInt(prompt("숫자를 입력하시오."));
    if (userNumber !== null) {
        if (userNumber % 4 === 0)
            document.getElementById("result1").innerHTML = `${userNumber}는 4의 배수입니다.`
        else
            document.getElementById("result1").innerHTML = `${userNumber}는 4의 배수가 아닙니다.`
    }
}

