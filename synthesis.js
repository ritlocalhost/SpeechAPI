window.addEventListener('load', getVoices);
// Schedules the get voices method for Chrome
speechSynthesis.addEventListener('voiceschanged', getVoices);

function start() {
	var text = document.getElementById('input').value;
	var voice = document.getElementById('voice').value;

	// Creates an utterance using the text
	var utterance = new SpeechSynthesisUtterance(text);

	// Sets the voice on the utterance
	utterance.voice = speechSynthesis.getVoices()[voice];

	speechSynthesis.speak(utterance);
}

function stop() {
	speechSynthesis.cancel();
}

function getVoices() {
	var select = document.getElementById('voice');
	if (!select.hasChildNodes()) {
		var voices = speechSynthesis.getVoices();

		for (var voice in voices) {
			var option = document.createElement('option');
			option.text = voices[voice].name;
			option.value = voice;
			select.appendChild(option);
		}
	}
}