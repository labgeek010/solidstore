import { productsServices } from "../services/products-services";

const d = document;

const obtainData = async()=>{
    const url = new URL(window, location);
    const id = url.searchParams.get("id");

    const img = d.querySelector("[data-img]");
    const name = d.querySelector("[data-name]");
    const price = d.querySelector("[data-price]");
    const description = d.querySelector("[data-description]");

    const products = await productsServices.detailpage(id)

        img.src = products.img;
        name.textContent = products.name;
        price.textContent  = products.price;
        description.textContent  = products.description;
     

}

obtainData();
 

