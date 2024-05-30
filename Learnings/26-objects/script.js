// Objects

// console.log(this.window.innerWidth);

let student = {
  name: "AkSHaY",
  age: 21,
  lName: "Dangi",

  education:{
      school:"SSM",
      clg:"NRI"
  }

  // getFullName: function(){
  //     return this.name + " " + this.lName
  // }
};

// console.log(student)
// console.log(student.name)
// console.log(student.education.school)

// document.write(`Your name is : ${student.name} <br/> <br/> Your school is ${student.education.school}`)

// for in loop {}

for(let abc in student){
    console.log(abc + ": " + student[abc])
}

console.log(student.name + " " + student.lName)

// console.log(student.getFullName())

// delete student.age

// console.log(student)

// ============ copy object ================

// let student2 = student

// delete student2.age

// console.log(student)
// console.log(student2)

// let student2 = { ...student };

// delete student2.age

// console.log(student.name.toLowerCase())

// ============ destructing ================

// console.log(student.name)

// const { name } = student;

// console.log(name);
