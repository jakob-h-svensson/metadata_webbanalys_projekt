
const products = {
    p1: {
        item_id: "protein1",
        item_name: "Protein Whey80, 1000g",
        item_category: "Protein",
        price: 299
    },
    p2: {
        item_id: "protein2",
        item_name: "Premium Casein, 750g",
        item_category: "Protein",
        price: 289
    },
    p5: {
        item_id: "protein5",
        item_name: "Färdigblandad Proteindryck, 8-pack",
        item_category: "Protein",
        price: 199
    },
    p4: {
        item_id: "protein4",
        item_name: "Proteinbars, 20-pack",
        item_category: "Protein",
        price: 299
    },
    p3: {
        item_id: "protein3",
        item_name: "Protein Whey100, 750g",
        item_category: "Protein",
        price: 299
    }
    
};


function addToCart(productKey) {

    const product = products[productKey];
    console.log(product)

    dataLayer.push({ecommerce: null});
    dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
            currency: 'SEK',
            value: product.price,
            items: [{
                item_id: product.item_id,
                item_name: product.item_name,
                item_category: product.item_category,
                price: product.price,
                quantity: 1
            }]
        }
    });
}

