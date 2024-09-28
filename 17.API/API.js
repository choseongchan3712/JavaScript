fetch("https://goweather.herokuapp.com/weather/Gangneung")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('#temperature').innerHTML =
    data['temperature']
  });
