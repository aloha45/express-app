const books = [
	{ name: "Name of the Wind", id: 1 },
	{ name: "Hot Dog", id: 2 },
	{ name: "Gone with the Wind", id: 3 },
];

module.exports = {
	getAll,
};

function getAll(req,res) {
	res.send(books);
}
