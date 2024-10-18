// доступность кнопки по чекбосу

const checkbox = document.getElementById('agreementCheckbox');
const button = document.getElementById('submitForm');

checkbox.addEventListener('change', function () {
	button.disabled = !this.checked;
});