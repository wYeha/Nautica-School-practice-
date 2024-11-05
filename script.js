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

// cлайдер

const radioButtons = document.querySelectorAll('input[name="item"]');
const dynamicImage = document.getElementById('fluidImage');
const dynamicTitle = document.getElementById('fluidTitle');
const dynamicText = document.getElementById('fluidText');
const dynamicTitleWide = document.getElementById('fluidTitleWide');
const dynamicTextWide = document.getElementById('fluidTextWide');

const content = {
	luch: {
		image: "../images/weather-image.jpg",
		title: '«Луч»',
		text: '«Луч» — олимпийский класс яхт, предназначенный для одного человека, который одновременно занимается и управлением яхтой, и настройкой паруса. Открытый кокпит и легкий вес делают его идеальным выбором для тренировок, где важны реакция, баланс и взаимодействие с ветром и волнами.',
		titleWide: '«Луч»',
		textWide: 'Сегодня отличная возможность потренироваться на швертботе «Луч». Не забудьте прихватить с собой крем SPF, чтобы ваше плавание было приятным и безопасным, а остальное — за нами!',
	},
	soling: {
		image: "../images/soling.jpg",
		title: '«Солинг»',
		text: '«Солинг» - это открытая яхта-кекельбот, разработанная норвежским дизайнером Яном Херманом Линге в 1964 году. Она предназначена для команды из двух или трех человек и является частью международного класса под эгидой Всемирного союза парусного спорта.',
		titleWide: '«Солинг»',
		textWide: 'Сегодня отличная возможность потренироваться на яхте «Солинг». Не забудьте прихватить с собой крем SPF, чтобы ваше плавание было приятным и безопасным, а остальное — за нами!',
	},
	finn: {
		image: "../images/finn.jpg",
		title: '«Финн»',
		text: '«Финн» - это олимпийский класс швертбот-одиночка, разработанный в 1949 году шведским конструктором Рихардом Сарби. Финн известен своей чуткостью к настройке и высокому уровню мастерства, необходимому для управления ею.',
		titleWide: '«Финн»',
		textWide: 'Сегодня отличная возможность потренироваться на яхте «Финн». Не забудьте прихватить с собой крем SPF, чтобы ваше плавание было приятным и безопасным, а остальное — за нами!',
	}
};

radioButtons.forEach(radio => {
	radio.addEventListener('change', () => {
		const selectedOption = radio.value;
		dynamicTitle.textContent = content[selectedOption].title;
		dynamicTitleWide.textContent = content[selectedOption].titleWide;
		dynamicText.textContent = content[selectedOption].text;
		dynamicTextWide.textContent = content[selectedOption].textWide;
		dynamicImage.style.backgroundImage = `url(${content[selectedOption].image})`;
	});
});
