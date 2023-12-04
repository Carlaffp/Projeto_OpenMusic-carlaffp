
export function renderButtons(categories){

  const buttonsContainer = document.querySelector('.buttons__container')

  const divButtons = document.createElement('div')
 divButtons.classList = 'divButtonsType'

  categories.forEach((element,index) =>{
    const buttonsType = {element,index}
    const buttons = creatButtons(buttonsType)
    divButtons.append(buttons)
    buttonsContainer.append(divButtons)
  })
}

function creatButtons (buttons){

  const buttonType = document.createElement('button')
  buttonType.classList = 'buttonType'
  buttonType.innerText = buttons.element
  buttonType.id = buttons.index

  return buttonType

}