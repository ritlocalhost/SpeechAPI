function listen() {
	// Create the recognition object
	var recognition = new webkitSpeechRecognition();

	recognition.addEventListener('result', () => {
		var output = document.getElementById('buffer');
		// Get the string containing the transcript
		output.value = recognition.results[0][0].transcript;
	});
	recognition.start();
}

function speak() {
	var text = document.getElementById('buffer').value;

	// Creates an utterance using the text
	var utterance = new SpeechSynthesisUtterance(text);

	utterance.lang = 'en-US';

	speechSynthesis.speak(utterance);
}