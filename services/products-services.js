
///////////////////FETCH API//////////////////////////


const productsList = () => {
    return fetch("http://localhost:3000/product")
        .then(response => response.json())
        .then(data => {
            // Sort the products by category and then by name
            data.sort((a, b) => {
                // First, compare by category
                const categoryComparison = a.category.localeCompare(b.category);
                if (categoryComparison !== 0) {
                    return categoryComparison;
                }
                // If categories are the same, compare by name
                return a.name.localeCompare(b.name);
            });
            return data;
        })
        .catch(error => console.error(error));
};


////get product by id////

const getProductById = (id) => {
    return fetch("http://localhost:3000/product")
        .then(response => response.json())
        .then(data => {
            const object = data.find(element => element.id === id);
            return object;
        })
        .catch(error => console.error(error));
};

/////get product by category ///
const getProductByCategory = (category) => {
    return fetch("http://localhost:3000/product")
        .then(response => response.json())
        .then(data => {
            const objectArray = data.filter(element => element.category === category);
            return objectArray;
        })
        .catch(error => console.error(error));
};


// //POST

 const createProducts =  (imageURL, category, name, price, description, id) => {
     return fetch(`http://localhost:3000/product`, {
     method: "POST",
     headers: {
         "Content-type":"application/json"
         },
         body: JSON.stringify({
             imageURL,
             category,
             name,
             price,
             description,
             id: uuid.v4()
         })
     }).then(response => {
         if (response.ok) {
             return response.body
         }
     })
    throw new Error("We couldn't create your item")
}



export const productsServices = {
    productsList,
    createProducts,
    getProductById,
    getProductByCategory
}
