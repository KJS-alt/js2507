function myFunction() {
    let x = document.getElementById("numb").value
    let text

    if (isNaN(x) || x < 1 || x > 10) {
        // 제외할 입력값에 대한 예외처리
        text = "Input not valid"
    } else {
        text = "Input OK"
    }
    document.getElementById("demo").innerHTML = text
}