$(document).foundation();

const password = document.querySelector('#password');
const submitButton = document.querySelector('#submitButton');
const loginForm = document.querySelector('#login-form');
const error = document.querySelector('.error');

loginForm.addEventListener('submit', function(event) {
	event.preventDefault();

	$.ajax({
		type: "post",
		data: {
			login: "efi",
			password: password.value
		},
		url: "https://efigence-camp.herokuapp.com/api/login",
	}).done(function(response) {
		console.log("success");
		console.log(respone);
		window.location.href = "second.html";
	}).fail(function(response) {
		console.log(error);
		error.style.display = "block";
		error.innerHTML = response.responseJSON.message;
	})
});
