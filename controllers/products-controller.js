import { productsServices } from "../services/products-services.js";



const createProduct = (imageURL, category,name, price, description, id) => {
    const card = document.createElement("div")
    const content = `
    <div class="item">
                <img class="item-image" src="${imageURL}" alt="item-image">
                <br>
                <h5 class="item-category">${category}</h5>
                <h5 class="item-name">${name}</h5>
                <p class="price">${price}</p>
                <p class="description">${description}</p>
                <a href="/detail-page.html?id=${id}">See item</a>
            </div>
    `;

    card.innerHTML = content
    card.dataset.id = id
    
    return card
}

const productContainer = document.querySelector('[data-product]')

productsServices
    .productsList()
    .then((data) => {
    data.forEach((product) => {     
        const newItem = createProduct(
            product.imageURL,
            product.category,
            product.name,
            product.price,
            product.description,
            product.id);
            productContainer.appendChild(newItem);
    });
}).catch((error) => alert("An error occurred."));

const renderProduct = ({imageURL, name, price, description})  => {
    const content = `
    <div class="dp-image">
            <img src="${imageURL}">
        </div>

        <div class="dp-info-container">

            <h2>${name}</h2>
            <h5>${price}</h5>
            <p>${description}</p>

        </div>
    `;
    return content;
}
const renderContainer = document.querySelector('.dp-container')


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

productsServices
    .getProductById(urlParams.get('id'))
    .then((data) => {
        const product = renderProduct(data);
        console.log('product', product)
        renderContainer.innerHTML = product;
    });


    



