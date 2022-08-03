window.onload = function () {
	const nav = document.getElementById('navBar');
	const navBtns = nav.getElementsByClassName('nav__btn');

	for (let i = 0; i < navBtns.length; i++) {
		navBtns[i].addEventListener('click', function () {
			let current = document.getElementsByClassName('nav__active');

			if (current.length > 0) {
				current[0].className = current[0].className.replace(
					' nav__active',
					''
				);
			}

			this.className += ' nav__active';
		});
	}
};

window.onscroll = function () {
  const btnTop = document.getElementById('btnTop');

	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		btnTop.style.display = 'block';
	} else {
		btnTop.style.display = 'none';
	}
};

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
