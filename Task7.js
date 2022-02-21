const arr=[NaN,null,0,1,2,4,5,3,2,6,3,4,4];
let even=0, odd = 0, zero = 0;
for (let i=0; i<arr.length; i++) {
    if(typeof arr[i]==="number" && !isNaN (arr[i])){
        if (arr[i] === 0){
            zero += 1;
        } else if (arr[i] % 2 === 0){
            even += 1;
        } else {
            odd += 1;
        }
    }
}
console.log("Нечетные елементы: ",odd);
console.log("Четные елементы: ",even);
console.log("Нули: ",zero);