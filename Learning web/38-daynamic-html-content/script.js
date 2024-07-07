// EXAMPLE No.1
// var card_main = document.querySelector(".card_main")
// var btn = document.querySelector("button")

// var card = `
// <div class="h-auto w-80 relative mt-4 bg-white p-5 rounded-xl">
// <img
//   class="w-full h-60 object-cover rounded-xl"
//   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   alt=""
// />
// <h1 class="mt-4 text-xl font-bold">Akshay Dangi</h1>
// <p class="mt-3">
//   <span class="font-semibold">About Me:</span>
//   I am a full stack developer with 1.5 years of experience in web
//   development.
// </p>
// </div>`

// btn.addEventListener("click", function(){
//     card_main.innerHTML += card
// })



//EXAMPLE NO.2
// const cardsData = [
//     {
//       img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Akshay Dangi",
//       about:
//         "I am a full stack developer with 1.5 years of experience in web development.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       name: "Abhishek",
//       about:
//         "I am a full stack developer with 1.5 years of experience in web development.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       name: "Purva",
//       about:
//         "I am a full stack developer with 1.5 years of experience in web development.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//       name: "Nhi pata",
//       about:
//         "I am a full stack developer with 1.5 years of experience in web development.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//       name: "Nhi pata",
//       about:
//         "I am a full stack developer with 1.5 years of experience in web development.",
//     },
//   ];
  
//   var card_main = document.querySelector(".card_main");
  
//   cardsData.forEach(function (user) {
//     card_main.innerHTML += `<div class="h-auto w-80 relative mt-4 bg-white p-5 rounded-xl">
//        <img
//          class="w-full h-60 object-cover rounded-xl"
//          src='${user.img}'
//          alt=""
//        />
//        <h1 class="mt-4 text-xl font-bold">${user.name}</h1>
//        <p class="mt-3">
//          <span class="font-semibold">About Me:</span>
//          ${user.about}
//        </p>
//        </div>`;
//   });
  
  

  //EXAMPLE NO.3
  var card_main = document.querySelector(".card_main")
  
  async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    
    data.map((user)=>{
  
      console.log(user);
  
      card_main.innerHTML += `<div class="h-auto shadow-xl w-full relative bg-white p-5 rounded-xl">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold">${user.name}</h1>
        <p class="text-blue-700 underline cursor-pointer">${user.username}</p>
      </div>
    
        <h1 class="text-xl font-bold mt-4">${user.phone}</h1>
     
        <p class="text-blue-700 underline cursor-pointer mt-4">${user.email}</p>
  
      <p class="mt-4">${user.address.city} , ${user.address.street} , ${user.address.zipcode}</p>
      <p
        class="mt-4 bg-blue-400 w-fit px-2 py-1 rounded-lg text-white font-semibold"
      >
       ${user.company.name},  ${user.company.catchPhrase}
      </p>
    </div>`
    })
  }
  
  getUsers()