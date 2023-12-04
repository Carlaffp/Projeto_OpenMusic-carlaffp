import { renderProducts } from "./renderProducts.js"
import { productNotFinded } from "./selectButtonFilter.js"

export function selectInputFilter(array){
  const inputFilter = document.querySelector('#inputRange')
  const spanPrice = document.querySelector('#priceToSearch')
  
  inputFilter.addEventListener('input',() =>{
    spanPrice.innerHTML = inputFilter.value 

    const filterProduct = array.filter((element => element.price <= inputFilter.value))
    renderProducts(filterProduct)

    if(inputFilter.value<22){
      productNotFinded()
    }

  })
}
