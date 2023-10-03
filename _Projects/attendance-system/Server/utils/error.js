function error(msg, status = 500) {
	err = new Error(msg);
	err.status = status;
	return err;
}

module.exports = error;
