
    const button_to_items = 
{
    "p1" : 
    {
        item_id: "PGG003",
        item_name: "GraphGear 500",
        item_brand: "Pentel",
        item_category: "Pencil",
        item_category2: "Mechanical",
        item_variant: "0.9",
        price: 500,
    },
    "p2" : 
    {
        item_id: "PGG004",
        item_name: "GraphGear 500",
        item_brand: "Pentel",
        item_category: "Pencil",
        item_category2: "Mechanical",
        item_variant: "1.1",
        price: 500,
    },
}
    
    function addToCart(productId, productName, price) {

        console.log(price)
        console.log(typeof price)
        dataLayer.push({ecommerce: null});
    
        dataLayer.push({

            event: 'add_to_cart',

            ecommerce: {
                currency: 'SEK',
                value: price,
                items: [{
                    item_id: productId,
                    item_name: productName,
                    item_category: "Protein",
                    price: price,
                    quantity: 1
                }]
            }
        });
    }
