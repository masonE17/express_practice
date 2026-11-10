import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    const shout = req.query.shout === "true";
    if (shout) {
        res.json({ "message": `HELLO, ${name.toUpperCase()}!` })
    } else {
        res.json({ "message": `Hello, ${name}!` })
    }
})

app.listen(PORT, () => {
    console.log("Server is currently running...");
})