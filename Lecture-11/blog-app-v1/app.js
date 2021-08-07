const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');


// Connecting to the database;

connectDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

const blogRoutes = require('./routes/blogRoutes');

app.get('/', (req, res) => {
    res.send("Hello");
})


app.use(blogRoutes);


app.listen(3000, () => {
    console.log('server running at port 3000');
})