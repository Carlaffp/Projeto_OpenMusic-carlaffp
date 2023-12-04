export function renderDarkMode(){
  const darkButton = document.querySelector('.dark__controller')
  const html = document.querySelector('.dark__mode')
  const logo =document.querySelector('.logo')

  const modePreference = JSON.parse(localStorage.getItem('dark__mode'))
  if(modePreference){
    darkButton.src = "./src/assets/img/buttonSol.svg"
    logo.src = "./src/assets/img/logoDarkMode.svg"
    html.classList.add('dark__mode')
  }else{
    darkButton.src= "./src/assets/img/buttonLua.svg"
    logo.src = "./src/assets/img/logo.svg"
    html.classList.remove('dark__mode')
  }

  darkButton.addEventListener('click', (e) =>{
    html.classList.toggle('dark__mode')

    if(html.classList.contains('dark__mode')){
      darkButton.src = "./src/assets/img/buttonSol.svg"
      logo.src = "./src/assets/img/logoDarkMode.svg"
      localStorage.setItem('dark__mode', true)
    }else{
      darkButton.src= "./src/assets/img/buttonLua.svg"
      logo.src = "./src/assets/img/logo.svg"
      localStorage.setItem('dark__mode', false)
    }
  })
}

