const Express = require("express");
const app = Express();
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoose = require("mongoose")
const CONNECTION_URL = "mongodb+srv://domino316:HJgPRw!@4V3LuVR@domscluster.lzvts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DATABASE_NAME = "accounting_department";

const url = 'mongodb://localhost:27017';
let movies = ["Stuber", "The Notebook", "Venom"]
// const client = new MongoClient(url, {useUnifiedTopology: true});
mongoose.connect("mongodb+srv://domino316:HJgPRw!@4V3LuVR@domscluster.lzvts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true });



app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

let database, collection;


/**POST*/
app.post("/personnel", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});


/**GET*/
app.get("/movies", (request, response) => {
    // collection.find({}).toArray((error, result) => {
    //     if(error) {
    //         return response.status(500).send(error);
    //     }
    //     response.send(movies);
    // });
        return response.json({allMovies : movies})
});

/**GET:ID*/
app.get("/personnel/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, {useUnifiedTopology: true},{ useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("personnel");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
