const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

// enable cors
app.use(cors());
// enable json parser
app.use(express.json());

// route the customer api
const customerRoutes = require('./routes/customers');
// use the route
app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Customers API !")
})

// app.listen(PORT, (error) => {
//     if (!error)
//         console.log("Server is successfully listening at port:", PORT);
//     else
//         console.error('An error occurred:', error);
// });

main().catch((error) => console.error(error));

async function main() {
    // prepre conn string
    const connectionString = "mongodb+srv://dm4214:2NpN6GjTSRSKUVDG@cluster0.bwahp.mongodb.net/customerDB?retryWrites=true&w=majority&appName=Cluster0";
// connect to db
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);
}


module.exports = app
