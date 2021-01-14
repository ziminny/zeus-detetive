
const express = require("express")
const app = express();

app.use(express.static(__dirname+"/"))

app.get("/" , (request , response) => response.sendFile(__dirname+"/index.html"))
app.listen(9091 , '192.168.100.10', () => console.log("Listening on http port 9091") )

