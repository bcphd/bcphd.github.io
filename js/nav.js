// Listen for all clicks on the document
document.addEventListener('click', function () {

	// Bail if it's not a .nav-link
	if (!event.target.classList.contains('nav-link')) return;

	// Add the active class
	event.target.classList.add('nav-link-active');

	// Get all nav links
	var links = document.querySelectorAll('.nav-link');

	// Loop through each link
	for (var i = 0; i < links.length; i++) {

		// If the link is the one clicked, skip it
		if (links[i] === event.target) continue;

		// Remove the .active class
		links[i].classList.remove('nav-link-active');

	}

}, false);