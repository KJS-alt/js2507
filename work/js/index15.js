// Node:엘리먼트생성
const myP = document.createElement("p")
// id 추가
myP.id = "myId"
// class 추가
myP.classList.add("cls")
// TestNode 생성
const mytxt = document.createTextNode("세번째")
// 엘리먼트에 자식추가(textNode)
myP.appendChild(mytxt)

// div1의 자식으로 추가
let div1 = document.getElementById("div1")
div1.appendChild(myP)
