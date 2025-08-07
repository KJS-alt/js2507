const person = {
    myName : "김지수",
    age : 31,
    eyeColor : "brown"
}

const person2 = new Object(
    {
        myName: "김지수2",
        age: 40,
        eveColor: "green"
    }   
)
// 기존Obj
const person3 = new Object(
    {
        myName: "김지수3",
        age:43,
        eveColor: "green_3"
    }
)
// 새로운Obj
const man = Object.create(person3)

// man.myName
man.myName = "Peter"
man.etc = "etc"

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
]
const myObj = Object.fromEntries(fruits)
myObj.etc = "etc~"

// --------------------------------------
const person5 = {
    myName: "김지수",
    age: 15,
    eyeColor: "blue"
};
const person5_2 = {
    myName: "Anne",
    age: 20
};
// assign(){행위를 정의해준다}메소드
Object.assign(person5, person5_2)

// 클래스 : 기획서(설계도)
// 객체공장: 클래스를 통해서 오브젝트를 (생성할 때)만들 때, 생성자

function Person9(first, last, age, eye){
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}
const man1 = new Person9("지수", "최", 20, "yellow")


// 클래스 : 책
function Book(tit, sub, price, page){
    this.title = tit
    this.subj = sub
    this.price = price
    this.pages = page
}
const book1 = new Book("리액트", "한빛", "35000", 300)
const book2 = new Book("리액트", "한빛", "35000", 300)
const book3 = new Book("리액트", "한빛", "35000", 300)
const book4 = new Book("리액트", "한빛", "35000", 300)
const book5 = new Book("리액트", "한빛", "35000", 300)
