function A() {
	console.log('This is A');
}

function B() {
	A();
}

function C() {
	B();
	B();
}

function D() {
	C();
}

D();
