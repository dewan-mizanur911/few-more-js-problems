function largestElement(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const max = numbers[0];
        let element = numbers[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
