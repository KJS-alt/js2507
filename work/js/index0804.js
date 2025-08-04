// let d = document


// // 1. concat : "김지수 고객님 안녕하십니까"
// let nums = ["김지수"]
// let chars = [" 고객님 안녕하십니까"]

// let result1 = nums.concat(chars)
// console.log(result1)
// d.writeln(`1) ` + result1)

// d.writeln(`<br>`)
// // 2. join   : "*_*_*_ 고객님 안녕하십니까!"
// let nums2 = ["김_지_수_", "고객님 안녕하십니까"]

// let result2 = nums2.join(" ")
// console.log(result2)
// d.writeln(`2) ` + result2)

// d.writeln(`<br>`)
// // 3. push   : "*_*_*_ 고객님 안녕하십니까!"

// nums = ["김_지_수_"]

// nums.push(" 고객님 안녕하십니까!")
// let result3 = nums
// console.log(result3)
// d.writeln(`3) ` + result3)

// d.writeln(`<br>`)



// // 4. unshift: "수원역지점 *_*_*_ 고객님 안녕하십니까!"
// nums = [" 김_지_수_고객님 안녕하십니까!"]

// nums.unshift("수원역지점")
// let result4 = nums
// d.writeln(`4) ` + result4)

// d.writeln(`<br>`)


// // 5. pop    : "수원역지점 *_*_*_ 고객님 안녕하십니까", "수원역지점 *_*_*_ 고객님 안녕하십니까"
// nums = [" 김_지_수_고객님 안녕하십니까", "!"]

// d.writeln(`5) ` + nums)
// nums.pop()
// let result5 = nums
// d.writeln(`<b>--></b> ` + result5)

// d.writeln(`<br>`)


// // 6. shift  : "*_*_*_ 고객님 안녕하십니까"

// nums = ["수원역지점", "김_지_수_고객님 안녕하십니까"]
// d.writeln(`6) ` + nums)
// nums.shift()
// let result6 = nums
// d.writeln(`<b>--></b> ` + result6)

// d.writeln(`<br>`)


// // 7. splice : "*_*_*_ 고객님 오늘도 좋은하루 안녕하십니까"

// nums = ["김_지_수_고객님", " 안녕하십니까"]
// d.writeln(`7) ` + nums)

// nums.splice(1,1,"오늘도 좋은하루 안녕하십니까")
// let result7 = nums
// d.writeln(`<b>--></b> ` + result7)

// d.writeln(`<br>`)

// // 8. slice  : "*_*_*_"

// nums = ["김_지_수_" , "고객님", " 안녕하십니까"]
// d.writeln(`8) ` + nums)


// d.writeln(`<b>--></b> ` + nums.slice(0,1) )

// d.writeln(`<br>`)

let d = document
let myName = ["김", "지", "수", "고객님"]
let hi =  ["안녕하십니까"]
// // 1. concat : "김지수 고객님 안녕하십니까"
let result1 = myName.concat(hi)
console.log(`concat 인사말 배열합치기 : ${result1}`)
d.writeln(`<b>concat 인사말 배열합치기 :</b> ${result1} <br>`)

// // 2. join   : "*_*_*_ 고객님 안녕하십니까"
let result2 = result1.join("_")
console.log(`join_연결 : ${result2}`)
d.writeln(`<b>join_연결 :</b> ${result2} <br>`)

// // 3. push   : "*** 고객님 안녕하십니까!" "***고객님 안녕하십니까!"
let result3 = result1.push("!")
console.log(`push느낌표 추가 : ${result1}`)
d.writeln(`<b>push느낌표 추가 :</b> ${result1} <br>`)

// // 4. unshift: "수원역지점 *** 고객님 안녕하십니까!"
let result4 = result1.unshift("수원역지점")
console.log(`unshift 앞에 추가: ${result1}`)
d.writeln(`<b>unshift 앞에 추가:</b> ${result1} <br>`)

// // 5. pop    : "수원역지점 *** 고객님 안녕하십니까"
let result5 = result1.pop()
console.log(`pop 뒤에 삭제: ${result1}`)
d.writeln(`<b>pop 뒤에 삭제:</b> ${result1} <br>`)

// // 6. shift  : "*** 고객님 안녕하십니까"
let result6 = result1.shift()
console.log(`shift 앞에 삭제: ${result1}`)
d.writeln(`<b>shift 앞에 삭제:</b> ${result1} <br>`)

// // 7. splice : "*** 고객님 오늘도 좋은하루 안녕하십니까"
let result7 = result1.splice(4, 0, "오늘도 좋은하루")
console.log(`splice 중간 삽입: ${result1}`)
d.writeln(`<b>splice 중간 삽입:</b> ${result1} <br>`)

// // 8. slice  : "***"
let result8 = result1.slice(0,3)
console.log(`slice 이름 잘라오기: ${result8}`)
d.writeln(`<b>slice 이름 잘라오기:</b> ${result8} <br>`)
