import express from "express";
const app = express();

app.post("/hello", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server running...");
});