// ------------call--------------
//Example-1
// const person = {
//     info: function(){
//         console.log( `Age of ${this.name} is ${this.age} years.`);
//     }
// }
// const person1 = {name: "ak", age: 21}
// const person2 = {name: "nt", age: 20}

// person.info.call(person1)
// person.info.call(person2)

// //Example-2
// const user1 = {fname: 'shyam', lname: 'sharma'}
// const user2 = {fname: 'ram', lname: 'varma'}
// // ek function bana ke sabhi user ko greet message karnge
// function greet(message){
//     console.log(`${message} ${this.fname} ${this.lname}.`);
// }

// greet.call(user1, "Hello")
// greet.call(user2, "kaisa ho")

// const group = 
// ------------apply------------
// Example-1
// const person = {
//     fullName: function(){
//         return this.fname +" "+ this.lname
//     }
// }
// const person1 = {fname: 'ram', lname: 'das'}
// const person2 = {fnaem: 'lacky', lname: 'tiwari'}

// const fullname = person.fullName.apply(person1);
// console.log(fullname)

// //Example-2
// const user1 = {name: 'nikhil', profastion: "student"}
// const user2 = {name: 'ram', profastion: "developer"}

// function say(message){
//     console.log(`${message} ${this.name} ji.`)
// }

// say.apply(user1, ["Namste"])
// say.apply(user2, ["hello"])

// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// ------------bind--------------
//Example-1
const person1 = {
    fname: "nikhil",
    lname: "telase",
    fullname: function(){
        return this.fname + " " + this.lname
    }

}
const person1Fullname = person1.fullname()
console.log(person1Fullname)
// borrowing function from person1 using bind method
const person2 = {fname: "ram", lname: "bhujade"}
const person2Fullname = person1.fullname.bind(person2)
console.log(person2Fullname())

//Example-2
const student1 = {
    name: "ram",
    marks: {
        math: 55,
        science: 60,
        hindi: 75,
        english: 63,
        cs: 85
    },
    getPercentage : function(){
        const subjectLenght = Object.keys(this.marks).length;
        var total = 0;
        for(i in this.marks){
            total += this.marks[i]
        }
        let p = total/subjectLenght
        return p
    }
}
let studen1Percentage = student1.getPercentage()
console.log(studen1Percentage)

const student2 = {
    name: "nikhil",
    marks: {
        math: 93,
        science: 88,
        hindi: 80,
        english: 53,
        cs: 90
    },
}
// borowing percentage fuction from studen1
let studen2Percentage = student1.getPercentage.bind(student2)
console.log(studen2Percentage())

