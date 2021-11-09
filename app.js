var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var date = document.querySelector('.date')
var condit = document.querySelector('.condit')
var temp = document.querySelector('.temp')
var humid = document.querySelector('.humid')
var wind = document.querySelector('.wind')
var uv = document.querySelector('.uv')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f0b59db926725d50ddbe37a1957526a8')
    .then(response => response.json())
    .then(data => console.log(data))
});

