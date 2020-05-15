let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [9, 8, 7, 0];

function combine() {
    const res = [...arr1, ...arr2, ...arr3].sort((a, b) => {
        return a - b;
    });

    console.log(res);
}

combine();
