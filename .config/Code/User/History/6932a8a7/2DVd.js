const arr = [1, 2, 3, 4, 5, 6, 1, 1, 2, 5, 3, 4, 9, 8, 7];
const unique = [];

for (let i = 0; i < arr.length; i++){
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}
//const uniqueNumber = new Set(arr).size;


console.log(uniqueNumber);

