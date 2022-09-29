
// Exercise 6
function validate() {
	// event.preventDefault;

	var error = true;

	//RegEx
	var nameRegEx = /^[a-zA-Z]{2,10}$/igm;
	var emailRegEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/igm;;
	var addressRegEx = /^[a-zA-Z0-9]\w{2,20}$/igm; //Aquí solo he puesto que tenga de 3 a 20 carácteres
	var lastNRegEx = /^[a-zA-z]{2,10}$/igm;
	var passwordRegEx = /^[a-zA-Z0-9]\w{2,6}$/igm;
	var phoneRegEx = /^\d{9}$/igm;

	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fEmail = document.getElementById("fEmail").value;
	var fAddress = document.getElementById("fAddress").value;
	var fLastN = document.getElementById("fLastN").value;
	var fPassword = document.getElementById("fPassword").value;
	var fPhone = document.getElementById("fPhone").value;

	// Validate fields entered by the user: name, phone, password, and email

	///// Name Validation Ternario /////

	var fName_val = fName.match(nameRegEx);
	(fName_val) ? (
		error = false,
		document.getElementById("fName").classList.add('is-valid')
	) : (
		document.getElementById("fName").classList.add('is-invalid')
	);

    ///////Email  Validation Ternario//////////

	var fEmail_val = fEmail.match(emailRegEx);
	(fEmail_val) ? (
		error = false,
		document.getElementById("fEmail").classList.add('is-valid')
	) : (
		document.getElementById("fEmail").classList.add('is-invalid')
	);

    //////// Address Validation Ternario/////////
	var fAddress_val = fAddress.match(addressRegEx);
	(fAddress_val) ? (
		error = false,
		document.getElementById("fAddress").classList.add('is-valid')
	) : (
		document.getElementById("fAddress").classList.add('is-invalid')
	);
	
    //// LastName Validation Ternario /////
	var flastN_val = fLastN.match(lastNRegEx);
	(flastN_val) ? (
		error = false,
		document.getElementById("fLastN").classList.add('is-valid')
	) : (
		document.getElementById("fLastN").classList.add('is-invalid')
	);

    //// Password Validation Ternario /////
	var fPassword_val = fPassword.match(passwordRegEx);
	(fPassword_val) ? (
		error = false,
		document.getElementById("fPassword").classList.add('is-valid')
	) : (
		document.getElementById("fPassword").classList.add('is-invalid')
	);

////// Phone Validation Ternario ///////

	var fPhone_val = fPhone.match(phoneRegEx);
	(fPhone_val) ? (
		error = false,
		document.getElementById("fPhone").classList.add('is-valid')
	) : (
		document.getElementById("fPhone").classList.add('is-invalid')
	);

// (error == false) ? alert("Datos correctos") : alert("Datos no correctos")
}








