console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('blue')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

function image(){
	 window.open("https://play.google.com/store/apps/details?id=com.yashtech.ncertbooksdownloader");
}

function image1(){
	 window.open("https://assistant.google.com/services/a/uid/000000e04663e844?hl=en");
}

function image2(){
	 window.open("file:///D:/Academic%20Material/2nd%20Sem/HTML%20PROJECT/html%20project.html");
}

function social1(){
	 window.open("https://www.instagram.com/yash0756/");
}
function social2(){
	 window.open("https://twitter.com/yash7089");
}

function mySend(){
window.alert("Data Successfully Submitted.")
}