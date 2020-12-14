const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const PORT = 3000;
const HOST = "localhost";
const morgan = require("morgan");
// const helmet = require('helmet');
const server = http.createServer(app);
const logger = morgan("tiny");
const controllers = require("./controllers");

app.use(express.static("./public"));
app.use(logger);

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", controllers.home);
app.get("/products", controllers.products);
app.get("/products/:unique", controllers.productDetails);
app.get("/employees", controllers.employeeRender);
app.get("/employees/:id", controllers.anEmployee);

server.listen(PORT, HOST, () => {
	console.log(`https://${HOST}:${PORT}`);
});
