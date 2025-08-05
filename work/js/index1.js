function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  // 사용자가 입력한 값의 예외처리(유용한지 체크)
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}