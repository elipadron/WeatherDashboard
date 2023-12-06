
const searchInput = document.getElementById('search-input');
document.getElementById('search-button').addEventListener('click', function (event) {
  event.preventDefault();
  const city = "Atlanta";
  fetchWeatherData(city);
});

