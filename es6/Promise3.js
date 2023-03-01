function getFromCDN1() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Data!!!");
        }, 2000);
    })
}

function getFromCDN2() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Data!!!");
        }, 3000);
    })
}
console.time("profile")
Promise.any([getFromCDN1(), getFromCDN2()]).then(value => {
    console.log(value);
    console.timeEnd("profile")
})
console.log("End!!!");