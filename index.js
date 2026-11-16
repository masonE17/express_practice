import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

function logger(req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next();
}

app.use(logger);

app.get("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
        res.status(400).json({ error: "Invalid user ID" });
        return;
    }
    let userName = null;
    users.map((user) => {
        if (user.id === userId) {
            userName = user.name;
        }
    })
    if (!userName) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    res.json({ name: userName, id: userId });
})

app.listen(PORT, () => {
    console.log("Server is currently running...");
})