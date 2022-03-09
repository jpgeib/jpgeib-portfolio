//Boilerplate

const express = require("express");

const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 3001;

//Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));