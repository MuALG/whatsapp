function start(message) {
	window.InputEvent = window.Event || window.InputEvent;
	let input = new InputEvent('input', {bubbles: true});
  let box = document.getElementsByClassName('_13NKt')[1]
	box.innerText = message;
	box.dispatchEvent(input);
	document.querySelector('[data-icon="send"]').click();
}

function send(message, count) {
	for (var i = 0; count > i; i++){
		window.setTimeout(function(){
			start(message);
		}, 1000);
	}
}
