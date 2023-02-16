function toggleNav() {
	const outerGrid = document.querySelector(".outer-grid");
	outerGrid.classList.toggle("outer-grid-expand");

	const nav = document.querySelector("nav");
	nav.classList.toggle("hide-content");
}

function toggleForm() {
	const loginForm = document.querySelector(".form-popup");
	loginForm.classList.toggle("hide-content");
}

function home() {
	window.location.href = "http://127.0.0.1:5500/index.html";
}

function signUp() {
	window.location.href = "http://127.0.0.1:5500/signup.html";
}

let userList = [
	{
		name: "testname",
		email: "testmail@gmail.com",
		password: 123,
	},
];

function createAccount() {
	const uname = document.getElementById("newUserName").value;
	const email = document.getElementById("newUserEmail").value;
	const password = document.getElementById("psw").value;
	// const conpassword=document.getElementById("pswcon").value;
	const newUser = {
		name: uname,
		email: email,
		password: password,
	};
	userList.push(newUser);
	window.location.href = "http://127.0.0.1:5500/index.html";
}
