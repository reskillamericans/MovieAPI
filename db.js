
const mongoose = require('mongoose')

const url =  "mongodb+srv://domino316:HJgPRw!@4V3LuVR@domscluster.lzvts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
