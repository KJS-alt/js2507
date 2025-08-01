function greet(name, age) {
    return "Hello " + name + "! You are " + age + " years old";
}

document.getElementById("demo").innerHTML = `<b>greet(name, age)</b> -> <br> ${greet("John", 21)}`