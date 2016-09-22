window.addEventListener('load', () => {
	document.getElementById('trigger').addEventListener('click', listen);
});

function listen() {
	var recognition = new webkitSpeechRecognition();
	recognition.addEventListener('result', () => {
		var output = document.getElementById('output');
		output.innerText = 'test';
	});
	recognition.start();
}