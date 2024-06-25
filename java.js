//Add an event listener to the form to handle the form submission
document.getElementById('weatherForm').addEventListener('submit', function (e)) {                          e.preventDefault(); // Prevent the form from submitting the traditional way and refreshin gthe page

const city = document.getElementById('cityInput').value; // Have the City Name Enter by the User
const apiKey = 'b2b02f68834360ebc586a5c014d332f0'; //Open WeatherMap API key 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}&units=imperial';
}

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
  const weatherResult = document.getElementById('weatherResult'); // Get the element to displat the weather
}
