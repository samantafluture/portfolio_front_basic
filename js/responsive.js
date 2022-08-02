function openMenuMobile() {
	const btnContainer = document.getElementById('btnContainer');
	const nav = document.getElementById('navBar');

	nav.className = 'responsive__nav';

	btnContainer.innerHTML =
		'<button id="closeBtn" type="button" onclick="closeMenuMobile()"><i class="fa-solid fa-xmark"></i></button>';
}

function closeMenuMobile() {
    const btnContainer = document.getElementById('btnContainer');
    const nav = document.getElementById('navBar');

    nav.className = 'hidden';

    btnContainer.innerHTML =
		'<button id="openBtn" type="button" onclick="openMenuMobile()"><i class="fa fa-bars"></i></button>';
}
