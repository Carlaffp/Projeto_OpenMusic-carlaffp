/* Desenvolva sua lógica aqui ... */

 import { renderButtons } from "./renderButtons.js"
 import { renderProducts } from "./renderProducts.js"
 import { hendalSelectButtonFilter } from "./selectButtonFilter.js"
 import { renderDarkMode } from "./darkController.js"
 import { selectInputFilter } from "./SelectInputFilter.js"



renderButtons(categories)
renderProducts(products)
hendalSelectButtonFilter(products)
renderDarkMode()
selectInputFilter(products)