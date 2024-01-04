console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



// Edit JavaScript - Part 2
const showAlert = () => {
	alert("Form has been submitted");
};
form.addEventListener("click", showAlert);
// console.log("Form has been submitted")




// Edit JavaScript - Part 3

// Edit JavaScript - Part 4

// Edit JavaScript - Part 5

