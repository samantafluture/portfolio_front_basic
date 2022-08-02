var slideArray = [
	'../imgs/bruna-picture.jpg',
	'../imgs/jonathan-picture.jpg',
	'../imgs/juliano-picture.jpg',
];
var captionArray = [
	'Samanta is an excellent professional. She has experience of the world, patience and a great willingness to teach. Working with her is a fruitful and valuable experience for my professional career - B. Martins, IT Intern',
	'It was a pleasure to work with her, I hope we still have several opportunities to play different projects together, her ability is motivating and in everything she is present we are successful - J. Santos, Producer',
	'Samanta is a very focused professional and always oriented to seek information and research deeply on the topics raised. Very proactive and always in a good mood, has excellent interpersonal skills - J. Kimura - Project Manager',
];

setupSlides();
setupDots();

var slideIndex = 1; // slides indexed from 1
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 7000); // To avoid automatic slide change, comment this line

function setupSlides() {
	var i;
	var slideSet = document.getElementsByClassName('slideshow')[0];
	for (i = 0; i < slideArray.length; i++) {
		var slide = document.createElement('div'); // create a new slide
		slide.className = 'slides fade'; // set its classes to ber mySlides and fade

		var overlay = document.createElement('div');
		overlay.className = 'slides__overlay';
		slide.appendChild(overlay);

		var image = document.createElement('img'); // create the img to be included in the new slide
		image.style.width = '100%';
		image.src = slideArray[i];
		overlay.appendChild(image);

		var caption = document.createElement('div'); // create the caption to be included in the new slide
		caption.className = 'text';
		caption.innerHTML = captionArray[i];
		slide.appendChild(caption);

		slideSet.appendChild(slide); // add the new slide to the slideSet
	}
}

function setupDots() {
	var i;
	var dotSet = document.getElementsByClassName('dots__wrapper')[0];
	for (i = 0; i < slideArray.length; i++) {
		var dot = document.createElement('span'); // create a new element of type (tag) span
		dot.className = 'dot'; // give it class="dot"
		dot.index = i + 1; // give it an attribute index to remember its index
		dot.onclick = function () {
			currentSlide(this.index);
		}; // give it the onclick event
		dotSet.appendChild(dot); // add it as a child to to div "dots-container"
	}
}

function plusSlides(n) {
	slideIndex += n;
	showSlides(slideIndex);
	/* if automaticChange is on, reset the timer */
	if (timeout !== null) {
		clearTimeout(timeout);
		timeout = setTimeout(automaticChange, 7000);
	}
}

function currentSlide(n) {
	slideIndex = n;
	showSlides(slideIndex);
	/* if automaticChange is on, reset the timer */
	if (timeout !== null) {
		clearTimeout(timeout);
		timeout = setTimeout(automaticChange, 7000);
	}
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('slides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	} // if beyond the last one, go to the first one
	if (n < 1) {
		slideIndex = slides.length;
	} // if before the first one, go to the last one
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

function automaticChange() {
	slideIndex++;
	showSlides(slideIndex);
	timeout = setTimeout(automaticChange, 7000); // call again automaticChange() after 7s
}
