const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});
const app = require('./app');

//connecting to the database
const db = process.env.DB_URL
mongoose.connect(db).then(() => {
    console.log('DB connection successful!');
}).catch(err => {
    console.log('DB connection failed!');
    console.log(err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

