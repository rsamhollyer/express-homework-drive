const http = require("http");
const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");
const server = http.createServer(app);
const PORT = 3000;
const HOST = "localhost";
const controllers = require("./controllers");

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", controllers.home);
app.get("/items", controllers.items);

server.listen(PORT, HOST, () => {
	console.log(`http://${HOST}:${PORT}`);
});
