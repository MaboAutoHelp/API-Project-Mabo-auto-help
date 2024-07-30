const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://maboautohelp:ZN7KVqHYmlnpOtXe@firstapi.wwwee8b.mongodb.net/?retryWrites=true&w=majority&appName=firstapi')
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('Unable to Connected to database ')
})