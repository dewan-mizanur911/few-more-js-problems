// for of loop
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'abul', 'gabul', 'dabul', 'ibul', 'babul'];
function removeDuplicates(array){
    const newNames = [];
    for(const name of array){
        if(newNames.indexOf(name) == -1){ // shorcut of (const name = array[i])
            newNames.push(name);
        }
    }
    return newNames;
}

const freshArrayNames = removeDuplicates(names);
console.log(freshArrayNames);