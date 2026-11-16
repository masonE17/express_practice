import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

function verifyInput(req, res, next) {
    const sides = req.params.sides;
    if (isNaN(sides)) {
        res.status(400).json({ error: "Invalid input. Please provide a number." });
        return;
    } else if (sides <= 0) {
        res.status(400).json({ error: "Invalid input. Please provide a positive number." });
        return;
    }
    next();
}

function logger(req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next();
}

app.use(logger);

app.get("/square/:sides", verifyInput, (req, res) => {
    const sides = req.params.sides;
    res.json({ number: sides, area: sides * sides });
})

app.listen(PORT, () => {
    console.log("Server is running currently...");
})