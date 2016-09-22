window.addEventListener('load', function () {
	// Binds start function to start button
	document.getElementById('start').addEventListener('click', start);

	// Binds stop function to stop button
	document.getElementById('stop').addEventListener('click', stop);

	// Runs the get voices method for Edge
	getVoices();

	// Schedules the get voices method for Chrome
	speechSynthesis.addEventListener('voiceschanged', getVoices);
});


/**
 * Starts speaking the text input by the user
 */
function start() {
	// Gets the text input by the user
	var text = document.getElementById('input').value;
	// Gets the voice selected by the user
	var voice = document.getElementById('select').value;

	// Creates an utterance using the text
	var utterance = new SpeechSynthesisUtterance(text);

	// Sets the voice on the utterance
	utterance.voice = speechSynthesis.getVoices()[voice];

	// Starts speaking
	speechSynthesis.speak(utterance);
}

/**
 * Stops any text being spoken
 */
function stop() {
	// Cancels all queued speech
	speechSynthesis.cancel();
}

/**
 * Populates the dropdown with the available voices
 */
function getVoices() {
	var select = document.getElementById('select');
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