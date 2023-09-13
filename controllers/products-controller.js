import { productsServices } from "../services/products-services.js";



const createProduct = ({imageURL, category,name, price, description, id}) => {
    const card = document.createElement("div")
    const content = `
    <div class="item">
                <div class="image-container">
                <img class="item-image" src="${imageURL}" alt="item-image">
                </div>
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
        const newItem = createProduct(product);
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

if(urlParams.get('id')) {
    productsServices
    .getProductById(urlParams.get('id'))
    .then((data) => {
        const product = renderProduct(data);
        renderContainer.innerHTML = product;
    });
}

const PopContainer = document.querySelector('.pop-items-container');

if(PopContainer) {
    productsServices
    .getProductByCategory('Pop')
    .then((data) => {
        data.forEach(product => {     
            const newItem = createProduct(product);
            PopContainer.appendChild(newItem);
        });
    });
}



const ConsoleContainer = document.querySelector('.consoles-items-container');

if(ConsoleContainer) {
    productsServices
    .getProductByCategory('Console')
    .then((data) => {
        data.forEach(product => {     
            const newItem = createProduct(product);
            ConsoleContainer.appendChild(newItem);
        });
    });
}
    
