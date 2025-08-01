let text = "The temperature is " + toCelsius(77) + " Celsius.";
console.log(text);
document.getElementById("demo").innerHTML = `toCelsius(fahrenheit) -> <br> The temperature is  + <b>toCelsius(77)</b> +  Celsius. -> <br><br> ${text} `

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}