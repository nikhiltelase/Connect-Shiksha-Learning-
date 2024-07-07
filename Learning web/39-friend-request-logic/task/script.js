var addFriend = document.getElementById("addFriend");
var cancelRequest = document.getElementById("cancelRequest");
var unfriend = document.getElementById("unfriend");

var request_container = document.getElementById("request_container");
var friend_container = document.getElementById("friend_container");

var c_request = false;

addFriend.addEventListener("click", () => {
    c_request = false;
    request_container.style.display = "block"
    addFriend.style.display = "none"
    setTimeout(() => {
        if(!c_request){
            request_container.style.display = "none"
            friend_container.style.display = "block"
        }
    }, 2000);
})

cancelRequest.addEventListener("click", () => {
    addFriend.style.display = "block"
    request_container.style.display = "none"
    c_request = true;
})

unfriend.addEventListener("click", () => {
    addFriend.style.display = "block"
    friend_container.style.display = "none"
    console.log(c_request)
})