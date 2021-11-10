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
    .then(data => {
        var nameValue = data['name'];
        var dateValue = data['date'];
        var conditValue = data['weather'][0]['description'];
        var tempValue = data['main']['temp'];
        var humidValue = data['main']['humidity'];
        var windValue = data['wind'];
        var uvValue = data['uvi'];

        name.innerHTML =nameValue;
        date.innerHTML =dateValue;
        condit.innerHTML =conditValue;
        temp.innerHTML =tempValue;
        humid.innerHTML =humidValue;
        wind.innerHTML =windValue;
        uv.innerHTML =uvValue;
    })
    form.addEventListener('click', function (e) {
        e.preventDefault()
      
        liMaker(input.value)
        input.value = ''
      })
});

const form = document.querySelector('form')
const ul = document.querySelector('ul')
let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
  }



e.preventDefault()

itemsArray.push(input.value)
localStorage.setItem('items', JSON.stringify(itemsArray))

data.forEach((item) => {
    liMaker(item)
})

