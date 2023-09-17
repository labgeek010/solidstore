import {productsServices} from  "/services/products-services.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const URL = document.querySelector('[data-url]').value
    const category = document.querySelector('[data-category]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value
    const description = document.querySelector('[data-description]').value

    productsServices.createProducts(URL, category,name, price, description)
    .then(Response => {
        window.location.href = "/products.html"

        console.log(Response)
    }) .catch(error => {
        console.log(error)
    })
    
})

