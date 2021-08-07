// reverse a string
/*
const myString = 'One day I wiil shine'; 
let newString = [];
for(const letter of myString){
   newString = letter + newString;
}
*/

// reverse string function
/*
function reverseString(text){
    let reverseString = [];
    for(const letterOfText of text){
        reverseString = letterOfText + reverseString;
    }
    return reverseString;
}
const reversed = reverseString('I just hate  you.');
console.log(reversed);
*/

// remove duplicate names
/*
const names = ['Mamun', 'Abir', 'Bashar', 'Chitter jahangir', 'Dipu', 'Emon', 'Mamun', 'Fahad', 'Abir','Bashar', 'Ifty'];
let uniqueNames = [];
for(const name of names){
    if(uniqueNames.indexOf(name) == -1){
        uniqueNames.push(name);
    }
}
console.log(uniqueNames);

// remove duplicate names with a function
function removeDuplicate(arrayOfNames){
    let uniqueNames = [];
    for(const name of arrayOfNames){
        if(uniqueNames.indexOf(name) == -1){
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}
const filteredNames = removeDuplicate(names);
console.log(filteredNames);
*/

// divisible by 3 and 5 foobar
/* 
for(let i = 1; i <=  50; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('foobar');
        }
        else if(i % 3 == 0){
            console.log('foo');
        }
        else if(i % 5 == 0){
            console.log('bar');
        }
        else{
            console.log(i);
        }
    }
*/

// chippest phone
/*
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
function cheapestPhone(arrayOfPhones){
    let cheapest = arrayOfPhones[0];
    for(const phone of arrayOfPhones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheapPhone = cheapestPhone(phones);
console.log(cheapPhone.name);
*/

// total priceconst products = [
   /*
   const products =[
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
   for(const product of products){
        total = total + (product.price * product.quantity);
   }
   console.log(total);
   */

   // animal count
   function animalCount(miles){
       denityOfFirst10 = 10;
       densityOfSecond10 = 50;
       densityOfRest = 75;
       if(miles < 10){
           return miles * denityOfFirst10;
       }
       else if(miles >= 10 && miles < 20){
           return (denityOfFirst10 * 10) + ((miles - 10) * densityOfSecond10);
       }
       else{
        return (denityOfFirst10 * 10) + (densityOfSecond10 * 10) + ((miles - 20) * densityOfRest);
       }
   }
   const visited = animalCount(33);
   console.log(visited);