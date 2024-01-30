// Array

let heros = ['Ironman','Spiderman','Amitab','Dharanjay','Thor']

// for loop
for(let i = 0;i < heros.length;i++){
    console.log(heros[i]);
}

// for-of loop
for(let hero of heros){
    console.log(hero);
}

//Practice Question1

let marks = [85,97,44,37,76,60]
let sum = 0
for(let mar = 0; mar <marks.length;mar++){
    sum = sum+ marks[mar];
}
console.log(`The average marks of class ${sum/marks.length}`)

//Practice Question2

let prices = [250,645,300,900,50]
for (let dis = 0; dis <5;dis++){
    prices[dis] = prices[dis] - (prices[dis]*0.1)
}
console.log(prices)

// Push method

let footItems = ['Potato','Chips','Maggie','Green Tea'];
footItems.push("Burger","Pizza");
console.log(footItems);

//practice Question1

let companies = ["BLOOMBERG","Microsoft","IBM","Facebook"]
console.log(companies.shift())
console.log(companies.splice(2,1,"OLA"))
companies.push("Amazon")
console.log(companies)