
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
    createProducts
}
