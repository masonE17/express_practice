import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

function logger(req, res, next) {
    console.log(`${req.method} + ${req.url}`);
    next();
};

app.use(logger);

app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
    console.log("Server is currently running...");
})