import { productsServices } from "../services/products-services";

const d = document;

const obtainData = ()=>{
    const url = new URL(window, location);
    const id = url.searchParams.get("id");

    const img = d.querySelector("[data-img]");
    const name = d.querySelector("[data-name]");
    const price = d.querySelector("[data-price]");
    const description = d.querySelector("[data-description]");

    productsServices.detailpage(id).then((products) =>{

        img.src = products.img;
        name.textContent = products.name;
        price.textContent  = products.price;
        description.textContent  = products.description;
    })
    .catch(err => alert("Error"));

}

obtainData();
 

