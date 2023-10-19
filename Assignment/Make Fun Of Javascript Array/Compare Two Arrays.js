const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5];

JSON.stringify(arr1) === JSON.stringify(arr2)
	? console.log('EQUAL')
	: console.log('NOT EQUAL');

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const compare = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
};

console.log(compare(arr1, arr2));
