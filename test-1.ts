function rotateArray(array: number[], k: number): number[] {
    if (array.length === 0) {
        return array;
    } else {
        k = k % array.length;
        for (let i = 0; i < k; i++) {
            let removed = array.pop();
            if(removed !== undefined) array.unshift(removed);
        }
        return array;
    }
}


let test_arr = [3, 2, 1]
console.log(rotateArray(test_arr, 2)); // output: [ 2, 1, 3 ]