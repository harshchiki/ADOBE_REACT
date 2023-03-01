function doTask() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject("404 not found");
        }, 2000);
    })
}

doTask().then(
    (data) => console.log(data),
    (err) => console.log("Boom :-(", err)
)
console.log("End!!!");