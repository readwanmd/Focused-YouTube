const _id = Symbol('id');
const _roadNo = Symbol('roadNo');
const _city = Symbol('city');
const _region = Symbol('region');
const _country = Symbol('country');
const _postalCode = Symbol('postal');

class Address {
	constructor({ id, roadNo, city, region, country, postalCode }) {
		this[_id] = id;
		this[_roadNo] = roadNo || '';
		this[_city] = city || '';
		this[_region] = region || '';
		this[_country] = country || '';
		this[_postalCode] = postalCode || '';
	}

	get id() {
		return this[_id];
	}

	get roadNo() {
		return this[_roadNo];
	}

	set roadNo(v) {
		this[_roadNo] = v;
	}

	get city() {
		return this[_city];
	}

	set city(v) {
		this[_city] = v;
	}

	get region() {
		return this[_region];
	}

	set region(v) {
		this[_region] = v;
	}

	get country() {
		return this[_country];
	}

	set country(v) {
		this[_country] = v;
	}

	get postalCode() {
		return this[_postalCode];
	}

	set postalCode(v) {
		this[_postalCode] = v;
	}

	toString() {
		return `ID: ${this[_id]},
    RoadNo: ${this[_roadNo]}, 
    City: ${this[_city]}, 
    Region: ${this[_region]}, 
    Country: ${this[_country]}, 
    Postal Code: ${this[_postalCode]}`;
	}
}

module.exports = Address;
