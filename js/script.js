/**/
function showImage(path) {
	let el = document.querySelector('.clickedImage');
	pathStyle = "background-image: url("+path+")";
	//el.setAttribute("style",pathStyle);
	//el.classList.remove("hide");
}

let el2 = document.querySelector(".nav--next");
setTimeout(function(){ el2.click }, 3000);