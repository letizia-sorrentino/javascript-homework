//WEEK 5 HOMEWORK - API WEATHER

//1. Using a HTML/JS file in the browser

//2. Use axios to get weather data from the API I showed at the start of the lesson
const apiURL = `http://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=7191fefc1ad22b3e9a87628b612c82a9`;

//3.Wrap the axios call in an async function
const getData = async () => {

//4.Use await before the axios call
    const { data } = await axios.get(apiURL);

//5.Destructure the response to get the { data } part of the response

    //data.list.forEach(element => {
    //console.log(element);
    //console.log(new Date(element.dt * 1000).toLocaleString());
    //console.log(Math.round(element.main.temp -273.15));
    //console.log(element.weather[0].description)
    //});

    const html = data.list.map(element => {
        return `<div class="element">
    <h1>${new Date(element.dt * 1000).toLocaleString()}</h1>
    <p>${Math.round(element.main.temp - 273.15)}&#8451:</p>
    <p>${element.weather[0].description}</p>
    </div > `
    });

    //console.log(html);
    document.getElementById('root').innerHTML = html.join("");
};

//6. Console.log the weather data (this will show you completed the above)
getData();

//DEMO with SPINNER IN JS 

//Use axios to get weather data from the API I showed at the start of the lesson
//const apiURL = `http://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=7191fefc1ad22b3e9a87628b612c82a9`;

//Wrap the axios call in an async function
//const getData = async () => {

//JUST BEFORE GETTING THE DATA CREATE THE SPINNER
    //document.getElementById('root').innerHTML = <div class="lds-roller">
                                                //<div></div>
                                                //<div></div>
                                                //<div></div>
                                                //<div></div>
                                                //<div></div>
                                                //<div></div>
                                                //<div></div>
                                                //<div></div>
                                           //</div>

//Use await before the axios call
    //const { data } = await axios.get(apiURL);

//ONCE I HAVE THE DATA CREATE THE HTML
    //const html = data.list.map(element => {
      //  return `<div class="element">
    //<h1>${new Date(element.dt * 1000).toLocaleString()}</h1>
    //<p>${Math.round(element.main.temp - 273.15)}&#8451:</p>
    //<p>${element.weather[0].description}</p>
    //</div > `
    //});

    //OVERRIDE THE HTML WITH THE NEWLY CREATED WEATHER
    //document.getElementById('root').innerHTML = html.join("");
//};

//Console.log the weather data (this will show you completed the above)
//getData();

