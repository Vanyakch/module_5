let myMap = new Map();
myMap.set("Address","23");
myMap.set("Home", "65");
myMap.set("Flat","161");

myMap.forEach((value, key) => {
    console.log(`Direction - ${key}, Number - ${value}`);
})