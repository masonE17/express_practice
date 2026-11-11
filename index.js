import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

function verifyName(req, res, next) {
    const name = req.params.name;
    if (name.toLowerCase() != "admin") {
        res.status(403).send("Access denied.");
    } else {
        next();
    }
}

function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/dashboard/:name", verifyName, (req, res) => {
    res.send(`Welcome to the dashboard, ${req.params.name}`);
})

app.listen(PORT, () => {
    console.log("Server is currently running...");
})