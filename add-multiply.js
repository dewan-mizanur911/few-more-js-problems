function add(num1, num2){
    let total = num1 + num2;
    return total;
}
function multply(num1, num2){
    const total = num1 * num2;
    return total;
}
function woodCalculator(table, chair, bed){
    const perTableWood = 10;
    const perChairWood = 3;
    const perBedWood = 50;
    // wood calculation
    const tableWoodQuantity = perTableWood * table;
    const chairWoodQuantity = perChairWood * chair;
    const perBedWoodQuantity = perBedWood * bed;
    // adding all woods
    const totalWood = tableWoodQuantity + chairWoodQuantity + perBedWoodQuantity;
    return totalWood;
}
const furnitureWood = woodCalculator(1, 3, 2);
console.log(furnitureWood);