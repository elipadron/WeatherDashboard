const searchInput = document.getElementById('search-input');
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = searchInput.value.trim();

    fetchWeatherData(city);
});


const apiKey ="accef3746f34716977dc641e803d736d"