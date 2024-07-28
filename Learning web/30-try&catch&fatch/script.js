// Today's topic

// 1. Promise

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Hello from the promise 1");
    resolve()
  }, 2000);
});

promiseOne.then(function(){
    console.log("Resolved");
})

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Resolved p 2");
});

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise 2");
//     resolve({ username: "Akshay", age: 21 });
//   }, 1000);
// }).then(function (data) {
//   console.log(data);
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isError = true;

//     if (!isError) {
//       resolve({ userName: "Akshay", age: 22 });
//     } else {
//       reject("Something went wrong please try again later");
//     }
//   }, 1000);
// });

// promiseThree
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// var loading = false;
// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isError = true;

//     if (!isError) {
//       resolve({ userName: "Akshay", age: 22 });
//     } else {
//       reject("Error aa gyi");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((data) => {
//     console.log(data);
//     loading = true;
//     return data.userName;
//   })
//   .then((username) => {
//     loading = true;
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Thank you !");
//     loading = false;
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isError = true;

//     if (!isError) {
//       resolve({ userName: "Akshay", age: 22 });
//     } else {
//       reject("Error aa gyi");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const res = await promiseFive;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     data.forEach(function (user) {
//       console.log(`I am ${user.name} and I am leaving in ${user.address.city}`);
//     });

//     // console.log(data);
//   } catch (error) {
//     console.log("something went wrong");
//   }
// }

// fetchData();

async function fetchData() {
    try {
      const response = await fetch("https://localhost:3000/users/post");
      const data = await response.json();
  
      console.log(data);
    } catch (e) {
      console.log("Error");
      alert("Error")
    }
  }
  
  fetchData();