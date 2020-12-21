const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express();
const database = require('./config/database')
const port = process.env.PORT || 5000;
const todoRouter = require('./routes/todos')

// connect database
database.connect();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// config
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors({
    origin: "https://huongzz.herokuapp.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// routes
app.use('/api/todos', todoRouter)

app.listen(port, () => {
    console.log("Server listening in port = " + port);
})