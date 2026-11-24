import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

function logRequest(req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next();
}

function verifyAdmin(req, res, next) {
    const role = req.headers["x-role"];
    if (!role) {
        return res.status(400).send("Role header is missing!");
    }
    if (role !== "admin") {
        return res.status(403).send("Access denied!");
    }
    next();
}

app.use(logRequest);

app.get("/admin", verifyAdmin, (req, res) => {
    res.send("Welcome Admin!");
});

app.listen(PORT, () => {
    console.log("Server is running...");
})