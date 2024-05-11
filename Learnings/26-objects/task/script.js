//----------------Task-1-----------------
let student = {
    "name": "Nikhil",
    "age": 20,
    "profation": "student",
};

// console.log(student.profation)


//----------------Task-2------------------
// for (let key in student){
//     console.log(`key = ${key} || value = ${student[key]}`);
// }



//----------------Task-3------------------

let studentCopy = { ...student };
  
delete studentCopy.name;

console.log("Original", student);
console.log("Copied ", studentCopy);
  