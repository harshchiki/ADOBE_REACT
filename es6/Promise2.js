function getHotels() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Hotels Data!!!");
        }, 2000);
    })
}

function getFlights() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Flights Data!!!");
        }, 3000);
    })
}
console.time("profile")
Promise.all([getFlights(), getHotels()]).then(values => {
    console.log('Flights', values[0]);
    console.log('Hotels', values[1]);
    console.timeEnd("profile")
})
console.log("End!!!");