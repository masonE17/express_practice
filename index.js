import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

function requireToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send("Unauthorized: No token provided");
    }
    req.user = { name: "Mason" };
    next();
}

function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    res.status(200).send(`Hello ${name}`);
});

app.get("/secret", requireToken, (req, res) => {
    const userName = req.user.name;
    res.status(200).send(`This is a secret for ${userName}!`);
});

app.listen(PORT, () => {
    console.log("Server is currently running...");
});