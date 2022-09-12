/*
	FETCH a HTML file and show it as text example 
	if getting from S3, then make sure you have GET enabled in CORS policy


    npm install node-fetch@2.0

    Add this to package.json:

          "type": "module",

    USAGE: node index.js

*/

import fetch from 'node-fetch';

const url = "https://s3-agb-public-eu-west-2.s3.eu-west-2.amazonaws.com/index.html";

// METHOD 1
const response = await fetch(url)
.then(response  => response.text())
.then(console.log);


// METHOD 2
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		'X-RapidAPI-Key': 'your-rapidapi-key'
	}
};

// promise syntax
fetch(url, options)
	.then(res => res.text())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

// async await syntax
try {
	const res = await fetch(url, options);
	const json = await res.text();
	console.log(json);
} catch (err) {
	console.log(err);
}


/*
    
    METHOD 3

    Paste THIS into the browser console

    fetch('https://s3-agb-public-eu-west-2.s3.eu-west-2.amazonaws.com/index.html').then(response  => response.text()).then(console.log)


*/

