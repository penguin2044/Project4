document.addEventListener("DOMContentLoaded", load);
function load() {
	hideallErrors();

	document.getElementById("contactForm").addEventListener("submit", validate); //when the Submit button is called it calls the validate function
	document.getElementById("contactForm").addEventListener("reset", resetForm); //when the clear button is called it calls the resetForm function
	document.getElementById("contactForm").noValidate = "false";
}

function hideallErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
	// Get an array of format elements
	let format = document.getElementsByClassName("format");

	// Loop through each element in the format array
	for (let i = 0; i < format.length; i++) {
		// Hide the format element by setting it's display style to "none"
		format[i].style.display = "none";
	}
}

function validate(e) {
	hideallErrors();

	if (formHasError()) {
		e.preventDefault();
	}
}
function formHasError() {
	//geting all my ids and classes
	let error = document.getElementsByClassName("error");
	let format = document.getElementsByClassName("format");
	let firstName = document.getElementById("firstName");
	let lastName = document.getElementById("lastName");
	let email = document.getElementById("email");
	let PhoneNum = document.getElementById("PhoneNum");
	let message = document.getElementById("message");

	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //regex for phone num
	var emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //regex for email

	var check = false;
	if (firstName.value == null || firstName.value.trim() == "") {
		error[0].style.display = "block";
		if (!check) {
			firstName.select();
			firstName.focus();
		}
		check = true;
	}
	if (lastName.value == null || lastName.value.trim() == "") {
		error[1].style.display = "block";
		if (!check) {
			lastName.select();
			lastName.focus();
		}
		check = true;
	}
	if (email.value == null || email.value.trim() == "") {
		error[2].style.display = "block";
		if (!check) {
			email.select();
			email.focus();
		}
		check = true;
	} else if (!email.value.match(emailRegEx)) {
		format[0].style.display = "block";
		if (!check) {
			email.select();
			email.focus();
		}
		check = true;
	}

	if (PhoneNum.value == null || PhoneNum.value.trim() == "") {
		error[3].style.display = "block";
		if (!check) {
			PhoneNum.select();
			PhoneNum.focus();
		}
		check = true;
	} else if (!PhoneNum.value.match(phoneno)) {
		format[1].style.display = "block";
		if (!check) {
			PhoneNum.select();
			PhoneNum.focus();
		}
		check = true;
	}
	if (message.value == null || message.value.trim() == "") {
		error[4].style.display = "block";
		if (!check) {
			message.select();
			message.focus();
		}
		check = true;
	}

	return check;
}
//reset button when clicked it clears everything and we hid the errors
function resetForm() {
	hideallErrors();
}
