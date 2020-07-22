'use strict'

const wrapper = document.querySelector('.wrapper');
let bankEmployees = [];

class Employee {
	constructor (name, salary) {
		this.name = name;
		this.salary = salary;
	}
}

class EmpTable {
	constructor (arr) {
		this.htmlLine = '<table>';

		for (const elem of arr) {
			this.htmlLine += `<tr><td>${elem.name}</td><td>${elem.salary}</td></tr>`
		}
	}

	getCode() {
		return this.htmlLine +'</table>';
	}
}

for (let i = 0; i < 10; i++) {
	const employee = new Employee ('Joen' + i , i * 1000);
	console.log(employee);
	bankEmployees.push(employee);
}

const empTable = new EmpTable(bankEmployees);

wrapper.innerHTML = empTable.getCode();