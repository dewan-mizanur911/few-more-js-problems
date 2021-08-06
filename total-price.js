const products = [
    {
        name: 'Laptop', price: '43000', quantity: 1
    },
    {
        name: 'shirt', price: 500, quantity: 3
    },
    {
        name: 'Watch', price: 3390, quantity: 2
    },
    {
        name: "Mobile", price: 55000, quantity: 1
    }
]
let total = 0;
for (const product of products) {
    total = total + (product.price * product.quantity);
}
console.log(total);