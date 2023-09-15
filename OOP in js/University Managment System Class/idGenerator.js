function* generateId() {
	index = 1;
	while (true) {
		yield index++;
	}
}

module.exports = generateId;
