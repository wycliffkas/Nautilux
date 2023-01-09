const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

app.use(cors());

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.get("/interventions", (req, res) => {
	res.status(200).json(data);
});

app.get("/intervention/:id", (req, res) => {
	const interventionId = req.params.id;

	for (let intervention of data) {
		if (intervention.id == interventionId) {
			res.status(200).json(intervention);
			return;
		}
	}

	res.status(404).json({});
});
