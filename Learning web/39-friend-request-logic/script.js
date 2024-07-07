// add_friend.addEventListener("click", ()=>{
//     add_friend.textContent = "Friends"
//     add_friend.style.backgroundColor = "green"
// })

// remove_btn.addEventListener("click", ()=>{
//     add_friend.textContent = "Add Friend"
//     add_friend.style.backgroundColor = "royalblue"
// })


// setTimeout(function(){
//     console.log("Hello jii");
// },3000)


// setInterval(function(){
//     console.log("chal gya");
// }, 3000)



var add_friend = document.querySelector(".add_friend");
var remove_btn = document.querySelector(".remove_btn");
var isCanceled = false
var isFriend = false

add_friend.addEventListener("click", ()=>{
    add_friend.textContent = "Friend Request Sent"
    add_friend.style.background = "orange"
    remove_btn.style.display = "block"
    isCanceled = false
    

    setTimeout(function(){
       if(!isCanceled){
        add_friend.textContent = "Friend"
        add_friend.style.background = "green"
        remove_btn.textContent = "Unfriend"
       }
    }, 5000)
})

remove_btn.addEventListener("click", ()=>{
    add_friend.textContent = "Add Friend",
    add_friend.style.background = "royalblue"
    isCanceled = true

})