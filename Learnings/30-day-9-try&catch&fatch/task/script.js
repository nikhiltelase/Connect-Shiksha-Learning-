//-------------Task-1---------------------
// const chainbalePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isError = false;

//         if (!isError){
//             resolve({name: "nikhil", surname: "telase"})
//         }else{
//             reject("error aa gya kya karu")
//         }
//     }, 1000);
// });

// chainbalePromise
//     .then((data) => {
//         console.log(data);
//         return data.name
//     })
//     .then((name) => {
//         console.log(name);
//         return `Hi ${name}`
//     })
//     .then((hi) => {
//         console.log(hi);
//         return `${hi} app kaise ho`
//     })
//     .then((kaiseHo) => {
//         console.log(kaiseHo)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("ho gya yaar")
//     })


//-------------Task-2 & Task-3---------------------

// async function fetchUsers() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const users = await response.json();
//       console.log(response.url)
//       users.forEach(user => {
//         console.log(`Name: ${user.name}, City: ${user.address.city}`);
//       });
//       console.log("Total Users = ",users.length)
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchUsers();

// ---------------project-news-api---------------
async function fetchNews() {
    var apiKey = '57b3d49680ef46149e2f418004313e95';
    var apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const newsData = await response.json();
        console.log(response.url);
        var newsAriticles = newsData.articles;
        // console.log(newsAriticles)
        console.log("---------------------------Top News-----------------------\n\n")
        
        for (i in newsAriticles){
            console.log(`${Number(i)+1}. ${newsAriticles[i].title}`)
            console.log(`Desciption: ${newsAriticles[i].description}`)
            console.log(`url: ${newsAriticles[i].url}`)
            console.log(`PublishedAt: ${newsAriticles[i].publishedAt}`)
            console.log("\n\n\n")
        }

    }catch(error){
        console.log(error);
    }
}

fetchNews();