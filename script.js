// доступность кнопки по чекбосу

const checkbox = document.getElementById('agreementCheckbox');
const button = document.getElementById('submitForm');
const fakeImage = document.getElementById('fakeImage');

checkbox.addEventListener('change', function () {
	button.disabled = !this.checked;

	if (this.checked) {
		fakeImage.style.opacity = 1;
	} else {
		fakeImage.style.opacity = 0;
	}
});