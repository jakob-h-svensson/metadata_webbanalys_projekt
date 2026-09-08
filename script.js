
const products = {
    /* Protein */
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
    },

    /* Tillbehör */

    tb1: {
        item_id: "tillbehor1",
        item_name: "Vattenflaska Rostfritt, 700ml",
        item_category: "Tillbehör",
        price: 199
    },

    tb2: {
        item_id: "tillbehor2",
        item_name: "Shaker Svart, 700ml",
        item_category: "Tillbehör",
        price: 59
    },

    tb3: {
        item_id: "tillbehor3",
        item_name: "Vattenkanna \"Jug\", 2 liter",
        item_category: "Tillbehör",
        price: 189
    },

    tb4: {
        item_id: "tillbehor4",
        item_name: "Snabba brillor",
        item_category: "Tillbehör",
        price: 14990
    },

    /* Vitaminer */

    v1: {
        item_id: "vitamin1",
        item_name: "Magnesium, 80 tabletter",
        item_category: "Vitaminer och Mineraler",
        price: 119
    },

    v2: {
        item_id: "vitamin2",
        item_name: "Vitamin Dailys, 90 tabletter",
        item_category: "Vitaminer och Mineraler",
        price: 79
    },

    v3: {
        item_id: "vitamin3",
        item_name: "Zink 25 mg, 60 tabletter",
        item_category: "Vitaminer och Mineraler",
        price: 139
    },

    v4: {
        item_id: "vitamin4",
        item_name: "ZMA Premium, 60 kapslar",
        item_category: "Vitaminer och Mineraler",
        price: 269
    },

    v5: {
        item_id: "vitamin5",
        item_name: "Vitamin D3, 60 tabletter",
        item_category: "Vitaminer och Mineraler",
        price: 89
    },

    /* Dryck */
    d1: {
        item_id: "dryck1",
        item_name: "Energidryck koffein, 24 x 33cl",
        item_category: "Dryck",
        price: 319
    },

    d2: {
        item_id: "dryck2",
        item_name: "PWO Shot, 12 x 50ml",
        item_category: "Dryck",
        price: 199
    },

    d3: {
        item_id: "dryck3",
        item_name: "Vitamindryck 500ml, 12-pack",
        item_category: "Dryck",
        price: 189
    },

    d4: {
        item_id: "dryck4",
        item_name: "Energidryck BCAA, 12 x 33cl",
        item_category: "Dryck",
        price: 219
    },

    /* Kreatin */
    k1: {
        item_id: "kreatin1",
        item_name: "Kreatin Monohydrat, 500g",
        item_category: "Kreatin",
        price: 179
    },

    k2: {
        item_id: "kreatin2",
        item_name: "Kreatin Monohydrate Smaksatt, 300g",
        item_category: "Kreatin",
        price: 195
    },

    k3: {
        item_id: "kreatin3",
        item_name: "Kreatin Gummies, 30 st",
        item_category: "Kreatin",
        price: 249
    },

    k4: {
        item_id: "kreatin4",
        item_name: "Creatine Chew Tabs, 60 st",
        item_category: "Kreatin",
        price: 189
    },
    
    
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

function purchase() {

    const rows = document.querySelectorAll('tbody tr[data-product]');
    const items = [];
    let value = 0;

    rows.forEach(row => {
        const product = products[row.dataset.product];
        const quantity = Number(row.querySelector('input[type="number"]').value);

        items.push({
            item_id: product.item_id,
            item_name: product.item_name,
            item_category: product.item_category,
            price: product.price,
            quantity: quantity
        });

        value += product.price * quantity;
    });

    dataLayer.push({ecommerce: null});
    dataLayer.push({
        event: 'purchase',
        ecommerce: {
            transaction_id: 'T' + Date.now(),
            currency: 'SEK',
            value: value,
            items: items
        }
    });
}

