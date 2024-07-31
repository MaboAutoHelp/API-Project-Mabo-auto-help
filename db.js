const mongoose = require('mongoose');

// Use template literals to concatenate the connection string
const password = process.env.PWD;
const uri = `mongodb+srv://maboautohelp:${password}@firstapi.wwwee8b.mongodb.net/?retryWrites=true&w=majority&appName=firstapi`;

mongoose.connect(uri)
.then(() => {
    console.log('Connected to database');
})
.catch(() => {
    console.log('Unable to connect to database');
});
