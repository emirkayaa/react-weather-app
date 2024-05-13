     export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
     export const WEATHER_API = 'https://api.openweathermap.org/data/2.5'
     export const geoApiOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ed98f25008msh29b08c74931eefap12fc9cjsnc4a074042f8b',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        fetch('/cities',geoApiOptions)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))