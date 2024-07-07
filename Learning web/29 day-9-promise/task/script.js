//---------------Task-crating promise--------------------

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let hasError = false;

        if (!hasError) {
            // resolve
            var data = {'name': 'ram', 'number': 1};
            resolve(data);
        } else {
            // reject
            var error = new Error("Error occurred");
            reject(error);
        }
    }, 2000);
});

myPromise.then((data) => {
        console.log("Resolved:", data);
})
.catch((error) => {
        console.log("Rejected:", error);
});
