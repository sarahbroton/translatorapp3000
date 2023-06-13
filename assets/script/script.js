var textToTranslate = document.querySelector("#inText");
var dropDown = document.querySelector("#dropDown");
var button = document.querySelector("#genBtn");
var outText = document.querySelector("#outText");

// On button press 
button.addEventListener("click", function() {
    getData();
	translateMinion();
  });
  const languageOption =[
	{
		language: "Arabic",
		value: "ar"
	},
	{
		language: "Spanish",
		value: "es"
	},
	{
		language: "Hmong",
		value: "Hmn"
	},
	{
		language: "French",
		value: "fr"
	},
	{
		language: "German",
		value: "de"
	},
	{
		language: "Japanese",
		value: "ja"
	},
	{
		language: "Russian",
		value: "ru"
	},
	{
		language: "Korean",
		value: "ko"
	},
  ]

languageOption.forEach(function(option){
	var optionElement = document.createElement("option")
	optionElement.value = option.value;
	optionElement.textContent = option.language;
	dropDown.appendChild(optionElement);
})

let minionUrl = "https://api.funtranslations.com/translate/minion.json"
function translateMinion(){
let inputValue = textToTranslate.value;
newUrl = `${minionUrl}?text=${inputValue}`;
fetch(newUrl).then((data)=>data.json).then((data)=>{
	console.log(data);
})
}

async function getData() {
const url = 'https://opentranslator.p.rapidapi.com/translate';
const selectedLanguage = dropDown.value;
const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': 'b690610184mshdf4ee424f60a171p18e07djsne7918f715ee4',
		'X-RapidAPI-Host': 'opentranslator.p.rapidapi.com'
	},
	body: JSON.stringify({
		text: textToTranslate.value,
		target: selectedLanguage
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

