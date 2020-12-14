const db = [
	{
		item: "space gun",
		cost: "10",
		id: 1,
	},

	{
		item: "chew gum",
		cost: "2",
		id: 2,
	},

	{
		item: "stuffy stuff",
		cost: "12",
		id: 3,
	},
];

const layouts = {
	partials: {
		head: "/partials/headers",
		foot: "/partials/footers",
	},
};

const home = (req, res) => {
	res.render("index", {
		...layouts,
		locals: {
			greeting: "Hello World",
		},
	});
};

const items = (req, res) => {
	res.render("items", {
		...layouts,
		locals: {
			items: db,
		},
	});
};

module.exports = {
	home,
	items,
};
