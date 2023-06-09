var textToTranslate = getelementByid("inText")
var dropDown = getelementByid("dropDown")
var button = getelementByid("genBtn")

async function getData() {
const url = 'https://opentranslator.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': 'b690610184mshdf4ee424f60a171p18e07djsne7918f715ee4',
		'X-RapidAPI-Host': 'opentranslator.p.rapidapi.com'
	},
	body: JSON.stringify({
		text: textToTranslate,
		target: 'ru'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(JSON.parse(result)[0].result.text);
} catch (error) {
	console.error(error);
}}

getData()