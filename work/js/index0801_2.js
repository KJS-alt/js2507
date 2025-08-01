function toCelsius(f) {
    return (5/9) * (f-32);
}

let value = toCelsius(77);

document.getElementById("demo").innerHTML = `<p style = "font-weight:bold">toCelsius(f) <br> toCelsius(77)</p> (5/9) * (f-32) = ${value}`
console.log(value);