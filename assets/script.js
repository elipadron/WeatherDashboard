
const searchInput = document.getElementById('search-input');
document.getElementById('search-button').addEventListener('click', function (event) {
  event.preventDefault();
  const city = "Atlanta";
  fetchWeatherData(city);
});

// const apiKey = "accef3746f34716977dc641e803d736d";
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 