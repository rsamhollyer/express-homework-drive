const db = require("./product-db copy"); //This is the products database
const employees = require("./employees-db copy"); //This is my employees lookuptable

const lookupTable = db.reduce((obj, item) => {
	//Want to convert my array into a lookuptable
	obj[item.id] = {
		...item,
	};
	return obj;
}, {});

const displayProduct = () => {
	return db
		.map(
			(p) =>
				`<div class="container"><a href="/products/${p.id}">${p.name}</a></div>`
		)
		.join("");
};

const singleProductDisplay = (someId) => {
	return lookupTable[someId];
};

const employeeListing = () => {
	return Object.keys(employees).map((k) => {
		let employee = employees[k];
		employee.id = k;
		return employee;
	});
};

const singleEmployee = (anID) => {
	return employees[anID];
};

module.exports = {
	displayProduct,
	singleProductDisplay,
	employeeListing,
	singleEmployee,
};
