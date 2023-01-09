function inputArrayBySpace () {
    let array = prompt('Input array separated by a space')?.trim().split(' ');

    while(!array?.length || array[0] === '') {
        array = prompt('Error: please repeat. Input array separated by a space')?.trim().split(' ');
    }

    return array;
}

function sortNumberArray(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];
    
    for (let i = 0; i < array.length - 1; ++i) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        }
        else {
            rightArray.push(array[i])
        }
    }
    
    return [...sortNumberArray(leftArray), pivot, ...sortNumberArray(rightArray)];
}

function sortArray(array) {
    let arrayNumber = [];
    let arrayString = [];

    for(const elem of array) {
        isNaN(elem) ? arrayString.push(elem) : arrayNumber.push(elem);
    }

    const resultArray = sortNumberArray(arrayNumber).concat(arrayString?.sort());

    return resultArray;
}

const arrCustomer = inputArrayBySpace();
console.log(`Customer array is ${arrCustomer}`);

const arrSort = sortArray(arrCustomer);
console.log(`Sort array is ${arrSort}`);

arrSort.splice(1, 3);
console.log(`Splice array 2 - 4 ${arrSort}`);