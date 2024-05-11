//---------------Task-1-------------
const createCounter = () => {
    let count = 0; 
    return () => {
        return ++count;
    };
};

const counterFunction = createCounter();

console.log(counterFunction());
console.log(counterFunction());

//---------------Task-2--------------
let users = [
    {name: "rinku", age: 20}, 
    {name: "ramnaresh", age: 30},
    {name: "pintu", age: 10},
];

let doubleAges = users.map((user) => user.age * 2);
console.log(doubleAges);

//---------------Task-3--------------
let adultUsers = users.filter((user) => user.age > 18);
console.log(adultUsers);

//---------------Task-4--------------
let userNames = users.map((user) => user.name);
let longNames = userNames.filter((name) => name.length > 5);
console.log(longNames);
