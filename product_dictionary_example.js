const form_to_items = 
{
    "form_pgg500_09" : 
    {
        item_id: "PGG003",
        item_name: "GraphGear 500",
        item_brand: "Pentel",
        item_category: "Pencil",
        item_category2: "Mechanical",
        item_variant: "0.9",
        price: 500,
    },
    "form_pgg500_11" : 
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

function handle_purchase(event)
{
    const form = event.target
    const item = form_to_items[form.name]
    const data = new FormData(form)
    const quantity = parseInt(data.get("quantity"))
    if(item && quantity && quantity >= 1)
    {
        item.quantity = quantity
        const ecommerce = {
            transaction_id: "T1",
            currency: "SEK",
            items: [item]
        }
        ecommerce.value = item.quantity * item.price
        dataLayer.push({ecommerce: null})
        dataLayer.push({ event: "purchase", ecommerce: ecommerce })
    }
}

for(const form of document.forms)
{
    if(form.action.includes("purchase")) { form.onsubmit = handle_purchase }
}

