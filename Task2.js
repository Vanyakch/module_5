let a = prompt("Введит число ");
switch(typeof a){
  case "number": console.log("x - number");
    break;
    case "string": console.log("x - string");
    break;
    case "boolean": console.log("x - boolean");
    break;
  default:
    console.log("Undefined");
    
}