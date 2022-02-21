let a = prompt("Введит число ");
a = +a;
console.log(typeof a);
function even_Or_Odd(a){
    return a % 2 === 0 ? "Четное" : "Не четное ";
}
if ((a= +a)){
    console.log(even_Or_Odd(a));
}else{
    console.log("Упс,кажется вы ошиблись");
}