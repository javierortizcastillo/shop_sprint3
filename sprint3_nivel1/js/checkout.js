
// Exercise 6
function validate() {
	var error = true;
	//RegEx
	var nameRegEx = /^[a-zA-z]{2,10}$/igm; // fName
	var emailRegEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/igm; //fEmail 
	var addressRegEx = /^[a-zA-Z0-9]\w{2,20}$/igm; //fAddress
	var fLastNRegEx = /^[a-zA-z]{2,10}$/igm; //fLastN
	var passwordRegEx = /^[a-zA-Z0-9]\w{2,6}$/igm; //fPassword
	var phoneRegEx = /^\d{9}$/igm; //fPhone
	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fEmail = document.getElementById("fEmail").value;
	var fAddress = document.getElementById("fAddress").value;
	var fLastN = document.getElementById("fLastN").value;
	var fPassword = document.getElementById("fPassword").value;
	var fPhone = document.getElementById("fPhone").value;

	// Get the error elements
	// var errorName = document.getElementById("errorName");
	// var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email

	//Name validation.
	var fName_val = fName.match(nameRegEx);
	if(fName_val) {
		error = false;
		document.getElementById('fName').classList.add('is-valid');
	}else{
		document.getElementById('fName').classList.add('is-invalid');
	}

	//Email validation.
	var fEmail_val = fEmail.match(emailRegEx);
	if(fEmail_val){
		error = false;
		document.getElementById('fEmail').classList.add('is-valid');
	}else{
		document.getElementById('fEmail').classList.add('is-invalid');
	}

	//Address validation.
	var fAddress_val = fAddress.match(addressRegEx);
	if(fAddress_val){
		error = false;
		document.getElementById('fAddress').classList.add('is-valid');
	}else{
		document.getElementById('fAddress').classList.add('is-invalid');
	}

	//Last name validation
	var fLastN_val = fLastN.match(fLastNRegEx);
	if(fLastN_val){
		error = false;
		document.getElementById('fLastN').classList.add('is-valid');
	}else{
		document.getElementById('fLastN').classList.add('is-invalid');
	}

	//Password validation.
	var fPassword_val = fPassword.match(passwordRegEx);
	if(fPassword_val){
		error = false;
		document.getElementById('fPassword').classList.add('is-valid');
	}else{
		document.getElementById('fPassword').classList.add('is-invalid');
	}
	
	//Phone validation.
	var fPhone_val = fPhone.match(phoneRegEx);
	if(fPhone_val){
		error = false;
		document.getElementById('fPhone').classList.add('is-valid');
	}else{
		document.getElementById('fPhone').classList.add('is-invalid');
	}
	
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
