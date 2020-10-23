//Remembering Theme Color
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

// Changing Theme Color
let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
  if(mode == 'light') {
    document.getElementById('theme-style').href = './css/style.css'
  }
  if(mode == 'black') {
    document.getElementById('theme-style').href = './css/color-1.css'
  }
  if(mode == 'green') {
    document.getElementById('theme-style').href = './css/color-2.css'
  }
  if(mode == 'purple') {
    document.getElementById('theme-style').href = './css/color-3.css'
  }
   localStorage.setItem('theme', mode)
}
