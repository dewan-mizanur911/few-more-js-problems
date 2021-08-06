function animalCount(miles){
    const firstDense10 = 10;
    const seconDense10 = 50;
    const rest = 75;
    if(miles < 10){
        return miles * firstDense10;
    }
    else if(miles < 20){
        const total = ((miles - 10) * seconDense10) + (miles * firstDense10);
        return total;
    }
    else{
        const total = (firstDense10 * 10) + (seconDense10 * 10) + ((miles - 20) * rest);
        return total;
    }
}
const visited = animalCount(33);
console.log(visited);