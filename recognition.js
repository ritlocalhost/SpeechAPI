function start() {
	// Create the recognition object
	var recognition = new webkitSpeechRecognition();

	recognition.addEventListener('result', () => {
		var output = document.getElementById('output');
		// Get the string containing the transcript
		output.value = recognition.results[0][0].transcript;
	});
	recognition.start();
}