document.addEventListener('DOMContentLoaded', function () {
	document.documentElement.style.setProperty(
		'--color-light',
		'#212428'
	);
	document.documentElement.style.setProperty(
		'--color-white',
		'#212428'
	);
	document.documentElement.style.setProperty(
		'--color-dark',
		'#212428'
	);
	document.documentElement.style.setProperty(
		'--background-color-1',
		'#fff'
	);
	mode.classList.replace('fa-sun', 'fa-moon');
});

let typed = new Typed('#typed', {
	strings: [
		'frontend developer',
		'backend developer',
		'mobile developer',
		'ui/ux designer',
	],
	typeSpeed: 50,
	loop: true,
});

const hamMenu = document.querySelector('.hamMenu');

hamMenu.addEventListener('click', () => {
	const navContainer = document.querySelector('.nav_container');
	const navListOpen = navContainer.getAttribute('navListOpen');

	if (navListOpen === 'false') {
		document
			.querySelector('.nav_container')
			.setAttribute('navListOpen', 'true');
	} else {
		document
			.querySelector('.nav_container')
			.setAttribute('navListOpen', 'false');
	}

	if (hamMenu.classList.contains('fa-bars')) {
		hamMenu.classList.replace('fa-bars', 'fa-xmark');
	} else {
		hamMenu.classList.replace('fa-xmark', 'fa-bars');
	}
});

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		document
			.querySelector('.nav_container')
			.setAttribute('navListOpen', 'false');

		hamMenu.classList.replace('fa-xmark', 'fa-bars');
	});
});

// DYNAMIC ASCENT COLOR

const colorVar = document.documentElement.getAttribute('--color-blue');
const colorVaribleHolders = document.querySelectorAll('.varColor');

colorVaribleHolders.forEach((holder) => {
	holder.addEventListener('click', (e) => {
		const colorValue = holder.getAttribute('colorValue');
		document.documentElement.style.setProperty(
			'--color-blue',
			colorValue
		);
	});
});

// ========================================

// SWITCHING BETWEEN DARK AND LIGHT MODES

const mode = document.querySelector('.mode');

mode.addEventListener('click', (_) => {
	if (mode.classList.contains('fa-sun')) {
		document.documentElement.style.setProperty(
			'--color-light',
			'#212428'
		);
		document.documentElement.style.setProperty(
			'--color-white',
			'#212428'
		);
		document.documentElement.style.setProperty(
			'--color-dark',
			'#212428'
		);
		document.documentElement.style.setProperty(
			'--background-color-1',
			'#fff'
		);
		mode.classList.replace('fa-sun', 'fa-moon');
	} else {
		document.documentElement.style.setProperty(
			'--color-light',
			'hsl(0, 0%, 80%)'
		);
		document.documentElement.style.setProperty(
			'--color-white',
			'#fff'
		);
		document.documentElement.style.setProperty(
			'--color-dark',
			'#000'
		);
		document.documentElement.style.setProperty(
			'--background-color-1',
			'#212428'
		);
		mode.classList.replace('fa-moon', 'fa-sun');
	}
});