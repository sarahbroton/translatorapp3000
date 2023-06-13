var textToTranslate = document.querySelector("#inText");
var dropDown = document.querySelector("#dropDown");
var button = document.querySelector("#genBtn");
var outText = document.querySelector("#outText");

button.addEventListener("click", function() {
    getData();
  });

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
		text: textToTranslate.value,
		target: 'ru'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	const translatedText = JSON.parse(result)[0].result.text;
    outText.textContent = translatedText;
    console.log(translatedText);
} catch (error) {
	console.log(error);
}}


async function getData() {
 const url = 'https://api.funtranslations.com/translate/pirate.json?text=Hello%20sir%21%20my%20mother%20goes%20with%20me%20to%20the%20ocean.'


}

