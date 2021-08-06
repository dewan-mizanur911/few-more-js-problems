const phones = [
    {
        name: 'Iphone', price: 85000, camera: 12, storage: 128
    },
    {
        name: 'One Plus', price: 45000, camera: 64, storage: 256
    },
    {
        name: 'Xiaomi', price: 22300, camera: 108, storage: 128
    },
    {
        name: 'Oppo', price: 23500, camera: 64, storage: 128
    },
    {
        name: 'RealMe', price: 15000, camera: 48, storage: 64
    },
    {
        name: 'Walton', price: 11000, camera: 16, storage: 64
    }
]
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest.name);