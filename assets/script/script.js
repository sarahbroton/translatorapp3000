var textToTranslate = document.querySelector("#inText");
var dropDown = document.querySelector("#dropDown");
var button = document.querySelector("#genBtn");
var outText = document.querySelector("#outText");
var link = document.querySelector("#link")
var saveBtn =document.querySelector("#saveBtn")
var returnLink = document.querySelector("#returnLink")


link.addEventListener("click", function(){
	switchToSaved();
})

saveBtn.addEventListener("click", function(){
	saveTranslation();
});
// On button press 
button.addEventListener("click", function() {
	let selectedLanguage = dropDown.value;
	if (selectedLanguage === "minion"){
		translateMinion();
	} else{
		getData();
	}  
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
	{
		language: "Minion",
		value: "minion"
	},
  ]

languageOption.forEach(function(option){
	var optionElement = document.createElement("option")
	optionElement.value = option.value;saveBtn
	optionElement.textContent = option.language;
	dropDown.appendChild(optionElement);
})

let minionUrl = "https://api.funtranslations.com/translate/minion.json"
function translateMinion(){
	let inputValue = textToTranslate.value;
	let selectedLanguage = dropDown.value;

if (selectedLanguage === "minion"){
var newUrl = `${minionUrl}?text=${inputValue}`;}

fetch(newUrl)
	.then((data)=>data.json())
	.then((data)=>{
		console.log(data);
		outText.textContent = data.contents.translated;
		
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

function saveTranslation(){
	let translatedText = outText.textContent;

	if (translatedText) {
		let savedTranslations = localStorage.getItem("translations");
		let saveArray = []
		let translationObject = {
			"textToTranslate": textToTranslate.value, 
			"translatedText": translatedText
		};
		saveArray.push(translationObject)
		if (savedTranslations) {
			JSON.parse(savedTranslations)
			console.log(savedTranslations)
		}
		else {
			localStorage.setItem("translations", JSON.stringify(saveArray))
		}
		console.log(savedTranslations)
		/*savedTranslations = savedTranslations ? JSON.parse(savedTranslations): [];

		savedTranslations.push(translatedText);

		localStorage.setItem("translations", JSON.stringify({
			"textToTranslate": textToTranslate.value, 
			"translatedText": translatedText
		}));*/
		console.log("translations Successfully saved")
	}

};

function switchToSaved(){
	window.location.href = 'Saved.html';
}
