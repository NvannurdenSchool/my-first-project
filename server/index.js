const express = require('express'),
	app = express(),
	ctrl = require("./controller.js"),
	port = 3000;

	app.use(express.json());

	app.post("/api/items/:id", ctrl.addItem);



	app.listen(port, () => console.log(`server is listening on port ${port}`));