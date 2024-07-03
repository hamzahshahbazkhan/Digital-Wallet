const express = require("express");
const rootRouter = require("./routes/index");
const cors = require('cors');


const app = express();

app.use(cors(
    {
        origin: ["https://digital-wallet-chi.vercel.app"],
        methods: ["POST", "PUT", "DELETE", "GET"],
        credentials: true
    }
));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use('/api/v1', rootRouter);
app.get('/hello', (req, res) => {
    res.json({ "hello": "world" });
})


app.listen(3000, () => {
    console.log("Server running")
});