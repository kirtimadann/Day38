// let origDogs = ["BullDog", "Beagle" , "Labrador"];
// let cats = new Array("American Curl", "Bengal");
// let birds = new Array("Falcons","Ducks","Flamingoes");

let Neha = ["kapil","basvant","ishwar","shree"];
let Aastha = ["ram","seeta","hanuman","lakshimn"];
let kirti = ["jyoti","santosh","mummy","bapu"];

console.log(Neha);
console.log(Aastha);
console.log(kirti);

//slice();

let nehaslice = Neha.slice(1,2);
console.log(nehaslice);

// let brigegirls = ["kirti","Aastha","neha"];
// let selectedboys = ["omkar","vishal","vinit","swapnil","kirti"];
// let faculty = ["mohita","manu","julin","yamini"];
// let unselected =["shubham","santosh","mayur","navneet"];


// // let slicedDogs = origDogs.slice(1,3);
// // console.log("OrigDogs =>",origDogs);
// // console.log("slicedDogs =>",slicedDogs);
// console.log( brigegirls);
// console.log("bridegorls =>" + brigegirls);

// let slicegirls = brigegirls.slice(1,2);
// console.log("slicegirls =>"+slicegirls)

// let selecboy = selectedboys.slice(2,2)
// console.log(selectedboys);
// console.log("selected boys = >" + selecboy);

// let fac = faculty.slice(1,3);
// console.log(faculty);
// console.log("faculty =>" +fac);
// let girls = brigegirls.slice(1,3)
// console.log("girls =>"+ girls);
// // let copyDogs = [...slicedDogs];
// // console.log("copy Dogs =>",copyDogs);

let copygirls = [...Neha];
console.log("copygirls =>" + copygirls);

// // let dogs = origDogs.slice(1);
// // console.log("Dogs =>",dogs);

let pushDog = Neha.push("Golden Retriever");
console.log("push Dogs =>",pushDog);
console.log("push Dogs array =>",Neha);

// let pushgirls = brigegirls.push("priti")
// console.log("pushgirls =>" , pushgirls);
// console.log(pushgirls);
// console.log("push gilrls array =>",pushgirls);


let popDog = Neha.pop();
console.log("pop Dogs =>",popDog);
//console.log("pop Dogs array =>",dogs);
 console.log(Neha);


// let popgirls = brigegirls.pop();
// console.log("pop girls =>", popgirls);

// // dogs[dogs.length] = "Poodle";
// // console.log(dogs.length)
// // console.log("Dogs =>",dogs);
// brigegirls [brigegirls.length] = "hello";
// console.log(brigegirls.length)
// console.log("girls =>",brigegirls);

let addFirst = Neha.unshift("Golden Retriever");
console.log("add first Dogs =>",Neha);
console.log("add first =>",addFirst);



// let addf = brigegirls.unshift("pritii");
// console.log("add first name =>",brigegirls);
// console.log("add f =>",addf);


let shiftDog = Neha.shift();
console.log("shiftDog  =>",shiftDog);
console.log("Dogs =>",Neha);

let returnshiftDog = Neha.shift();
console.log("shiftDog  =>",shiftDog);
console.log("Dogs =>",Neha);

// let shiftgirls = brigegirls.shift();
// console.log("shiftgirls =>",brigegirls);
// console.log("gilrs =>" , shiftgirls);

// // let addFirst1 = dogs.unshift("Golden Retriever");
// // console.log("Dogs =>",dogs);

// // dogs.splice(0,2,"Pug","Boxer","Husky");
// // console.log("Dogs =>",dogs);

// brigegirls.splice(0,2,"hello","hi","namste");
// console.log("girls =>",brigegirls);
// // let animals = dogs.concat(cats,birds);
// // console.log("animals",animals);

// let birdelabteam = brigegirls.concat(selectedboys,faculty,unselected);
// console.log("all members =>",birdelabteam);
// // let newAnimal = [...dogs,...cats,...birds].toString();

// // console.log("new animals  ==>> ",newAnimal);

// // let sortDog = dogs.sort();
// // console.log("Sort Dogs =>",sortDog);

// // function sArray([a,b,c,d]){
// //     // console.log(var1)
// //   console.log("Scan: "+a+ " "+b+ " "+ c + " " + d);
// // }
// // sArray(animals);

// // let joinArray = animals.join(" @ ");
// // console.log("join array ",joinArray);

// // let allAnimals = "";

// // for (let animal of animals) {
// //   allAnimals= allAnimals + animal+" ";
// // }
// // console.log("All animals",allAnimals)