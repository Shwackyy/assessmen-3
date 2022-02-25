console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


 let form = document.querySelector('form#contact');

form.addEventListener('click', function(){alert("submitted")});

let photo = document.querySelector('img')

photo.addEventListener('mouseover', function(){alert("keep your head up")})


//I can't get it to work
//It kind of works

