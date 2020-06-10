import axios from 'axios'

const openWeatherURL = 'https://api.openweathermap.org/data/2.5'

const fetchWeather = async (city = 'London,uk') => {
  const params = {
    q: city,
    units: 'metric',
    appid: process.env.VUE_APP_WEATHER_API_KEY
  }

  try {
    const { data } = await axios.get(`${openWeatherURL}/find`, { params })
    const temperature = data.list[0].main.temp

    return temperature
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchWeather
