let res=false;
let arr= [ 4, 5, 6, 7, 9, 9];
arr.forEach(function(item,index){
    for(let i= index + 1; i < arr.length;i++){
        if(item === arr[i]) res=true;
    }
});
console.log(res);