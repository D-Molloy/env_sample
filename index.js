require('dotenv').config()
const axios = require("axios")


console.log(process.env.RANDOM_STR)

// This is our API key
const APIKey = process.env.WEATHER_API_KEY;

// Here we are building the URL we need to query the database
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=${APIKey}`;

axios.get(queryURL)
  .then(({ data }) => {
    console.log(data)

  })
  .catch(err => console.log(err))