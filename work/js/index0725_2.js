var result = 0;
let num1 = 5;

// 할당연산자
// 대입연산자
result = num1;
console.log(`[ = 대입연산자] ${result}`);

// 누적대입연산자
// result = result + num1
result += num1;
console.log(`[ += 대입연산자] ${result}`);

// -=연산자
// result = result - num1
result -= num1;
console.log(`[ -=대입연산자] ${result}`);
console.log(`[결과보기:문자연결연산자사용---]` + result)

// *=연산자
// result = result * num1
result *= num1;
console.log(`[ *=대입연산자] ${result}`);

//  /=연산자
// result = result / num1
result /= num1;
console.log(`[ /=대입연산자] ${result}`);

// %/연산자
// result = result % num1
result %= num1;
console.log(`[%=대입연산자] ${result}`)
