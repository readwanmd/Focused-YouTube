const { Gurdian, Student, Teacher } = require('./person/index');
const { Contact, Address } = require('./contact/index');
const { Department, Subject, Exam } = require('./university/index');

//Generate Id
const generateId = require('./idGenerator');

const gurdianId = generateId();
const contactId = generateId();
const addressId = generateId();
const studentId = generateId();
const departmentId = generateId();
const subjectId = generateId();
const teacherId = generateId();
const employeeId = generateId();

/**
 * Gurdian ID-1
 */

const gurdian = new Gurdian(
	gurdianId.next().value,
	'Jamal',
	'Engineer',
	750000
);
gurdian.blood = 'O+';
gurdian.contact = new Contact({
	id: contactId.next().value,
	email: 'jamal@test.com',
	phone: '123-456-1234',
});

gurdian.contact.address = new Address({
	id: addressId.next().value,
	roadNo: '6/B',
	city: 'Dhaka City',
	region: 'Dhaka',
	country: 'Bangladesh',
	postalCode: 2220,
});

/**
 * Student ID-1
 */
const student = new Student(
	studentId.next().value,
	'Sayam',
	`ST00${studentId.next().value - 1}`,
	gurdian
);
student.blood = 'A+';
student.contact = new Contact({
	id: contactId.next().value,
	email: 'sayam@test.com',
	phone: '01955-152515',
	altPhone: student.gurdian.contact.phone,
	address: student.gurdian.contact.address,
});

/**
 * Department ID-1
 */
const department = new Department({
	id: departmentId.next().value,
	name: 'SWE',
});

/**
 * Subjects
 */
student.department = department;
department.subjects = [
	new Subject(subjectId.next().value, 'Computer Fundamental', 3),
	new Subject(subjectId.next().value, 'DBMS', 3),
	new Subject(subjectId.next().value, 'DBMS Lab', 1.5),
	new Subject(subjectId.next().value, 'DAA', 3),
];

// Total Credit of a student
const credit = student.department.subjects.reduce((a, b) => {
	a += b.credit;
	return a;
}, 0);

/**
 * Teachers
 */
const dean = new Teacher(
	teacherId.next().value,
	'Imam Hosen',
	department.subjects[1],
	`EMP100${employeeId.next().value}`
);
dean.blood = 'O-';
dean.department = department;
dean.salary = 100000;
dean.contact = new Contact({
	id: contactId.next().value,
	email: 'dean@inof.com',
	phone: '01558488392',
	address: new Address({
		id: addressId.next().value,
		roadNo: '34/D',
		city: 'Muktagacha',
		region: 'Mymensingh',
		country: 'Bangladesh',
		postalCode: 2150,
	}),
});

const teacher1 = new Teacher(
	teacherId.next().value,
	'Salman Hosen',
	department.subjects[2],
	`EMP100${employeeId.next().value}`
);
teacher1.blood = 'AB+';
teacher1.department = department;
teacher1.salary = 85000;
teacher1.contact = new Contact({
	id: contactId.next().value,
	email: 'teacher1@contact.com',
	phone: '01755555555',
	address: new Address({
		id: addressId.next().value,
		roadNo: '31/B',
		city: 'Noyonpur',
		region: 'Mymensingh',
		country: 'Bangladesh',
		postalCode: 1810,
	}),
});

const teacher2 = new Teacher(
	teacherId.next().value,
	'Sayam Hosen',
	department.subjects[0],
	`EMP100${employeeId.next().value}`
);

teacher2.blood = 'O+';
teacher2.department = department;
teacher2.salary = 72000;
teacher2.contact = new Contact({
	id: contactId.next().value,
	email: 'teacher2@contact.com',
	phone: '01717117171',
	address: new Address({
		id: addressId.next().value,
		roadNo: '34/D',
		city: 'Mymensingh Sadar',
		region: 'Mymensingh',
		country: 'Bangladesh',
		postalCode: 3178,
	}),
});

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

student.department.teachers.forEach((teacher, index) => {
	console.log(
		`${index + 1}. Name: ${teacher.name}, Subject: ${teacher.subject.name}`
	);
});

console.log(dean.department);
