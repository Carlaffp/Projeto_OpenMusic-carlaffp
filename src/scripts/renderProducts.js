export function renderProducts(array){

  const productsContainer = document.querySelector('.products__container')
  const productsList = document.querySelector('.products__list')

    productsList.innerHTML = ''
    

    array.forEach((product) =>{
    const productsCards = creatProducts(product)
    productsList.append(productsCards)
    productsContainer.append(productsList)
  })

}

function creatProducts(product){

  const productCard = document.createElement('li')
  productCard.classList= 'productCard'

  const divImage = document.createElement('div')
  divImage.classList = 'divImage'

  const image = document.createElement('img')
  image.src = product.img
  image.alt = product.title
  image.classList= 'imageProduct'
  divImage.append(image)
  

  const divBandYear = document.createElement('div')
  divBandYear.classList = 'divBandYear'

  const bandName = document.createElement('p')
  bandName.classList ='bandName'
  bandName.innerText = product.band

  const productYear = document.createElement('p')
  productYear.classList = "productYear"
  productYear.innerText = product.year
  

  divBandYear.append(bandName, productYear)
   
  const productTitle = document.createElement('h2')
  productTitle.classList ='productTitle'
  productTitle.innerText = product.title

  const divPriceAndButton = document.createElement('div')
  divPriceAndButton.classList = 'divPriceAndButton'

  const productPrice = document.createElement('p')
  productPrice.classList = 'productPrice'
  productPrice.innerText = `R$ ${(product.price).toFixed(2)}`

  const productButton = document.createElement('button')
  productButton.classList ='productButton'
  productButton.innerText= 'Comprar'
  
  divPriceAndButton.append(productPrice, productButton)

  productCard.append(divImage, divBandYear, productTitle, divPriceAndButton)
  

 return productCard
}