//declaring variables
let searchwrite = document.getElementsByTagName('input')[0];
let ctcode = document.getElementsByTagName('input')[1];
let searchBtn = document.getElementsByTagName('button')[0];
let highlight = document.getElementById('highlight');
let tempshow = document.getElementsByClassName('tempshow');
let windshow = document.getElementsByClassName('windshow');
let humashow = document.getElementsByClassName('humashow');

const apiKey = '4031afd7e8805c692aef025f987c9ecb';

let myfunc = () => {
	//Adjusting case sensitivity
	searchwrite.value[0].toUpperCase()
	ctcode.value.toLocaleLowerCase();

	const city = searchwrite.value;
	const countryCode = ctcode.value;

	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${apiKey}`;

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//my activities on function click
			// console.log(data);
			//removing input values
			searchwrite.value = '';
			ctcode.value = ''
			//setting data's inside box
			//tempbox
			highlight.innerHTML = `Weather of ${data.name}`
			tempshow[0].innerHTML = `Deg ${data.wind.deg}`
			tempshow[1].innerHTML = `pressure: ${data.main.pressure}`
			tempshow[2].innerHTML = `temp_max: ${data.main.temp_max}`
			tempshow[3].innerHTML = `temp_min: ${data.main.temp_min}`

			//windbox
			windshow[0].innerHTML = `feels_like: ${data.main.feels_like}`
			windshow[1].innerHTML = `Speed ${data.wind.speed}`
			windshow[2].innerHTML = `pressure: ${data.main.pressure}`
			windshow[3].innerHTML = `clouds ${data.clouds.all}			`

			//humaditybox
			humashow[0].innerHTML = ` Humidity ${data.main.humidity}`
			humashow[2].innerHTML = `Sunrise : ${data.sys.sunrise}`
			humashow[1].innerHTML = ` Sunset : ${data.sys.sunset}`
			humashow[3].innerHTML = `Longtitute ${data.coord.lat}`
		})
		.catch((error) => {
			console.log('Error:', error);
		});
};

//listening event on buttonclick
searchBtn.addEventListener('click', myfunc);


// Another creativity

let demoshow = document.getElementsByClassName('demoshow');
let minortemp = document.getElementsByClassName('minortemp');
let minowind = document.getElementsByClassName('minowind');
let velo = document.getElementsByClassName('velo');
let stromee = document.getElementsByClassName('stromee');

let myfunc2 = (ctname, ctcode, index) => {

	let city = ctname;
	let countryCode = ctcode;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${apiKey}`;

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			demoshow[index].innerHTML = city;
			minortemp[index].innerHTML = data.main.temp;
			minowind[index].innerHTML = data.wind.deg;
			velo[index].innerHTML = data.main.pressure;
			stromee[index].innerHTML = data.main.feels_like;
			//my activities on function click
			// console.log(data);
		},(error)=>{
			//handling errors
			console.log(error.message)
		})
}

//setting Data of different cities
myfunc2('Dhaka', 'bd', 0);
myfunc2('Sylhet', 'bd', 1);
myfunc2('Chittagong', 'bd', 2);
myfunc2('Khulna', 'bd', 3);