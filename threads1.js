const crypto = require('crypto');
// import crypto from 'crypto'; 

const start = Date.now(); 

crypto.pbkdf2("Secret123", "somesaltvalue", 10000, 512, 'sha512', (err, pwd) => {
    console.log("1:", Date.now() - start);
});

crypto.pbkdf2("Secret123", "somesaltvalue", 10000, 512, 'sha512', (err, pwd) => {
    console.log("2:", Date.now() - start);
});

crypto.pbkdf2("Secret123", "somesaltvalue", 10000, 512, 'sha512', (err, pwd) => {
    console.log("3:", Date.now() - start);
});

crypto.pbkdf2("Secret123", "somesaltvalue", 10000, 512, 'sha512', (err, pwd) => {
    console.log("4:", Date.now() - start);
});


crypto.pbkdf2("Secret123", "somesaltvalue", 10000, 512, 'sha512', (err, pwd) => {
    console.log("5:", Date.now() - start);
});