'use strict'

class Circle {
	constructor (radius) {
		this.circleRadius = radius;
		this.circleDiametr = 2 * this.circleRadius;
	}

	set radius (newRadius) {
		this.circleRadius = newRadius;
	}

	get radius () {
		return this.circleRadius
	}

	get diametr () {
		return this.circleDiametr
	}

	get circleArea () {
		return Math.pow(this.circleRadius,2) * 3.14;
	}

	get circumference () {
		return 3.14 * this.circleDiametr;
	}
}

const circle = new Circle(10);

console.log(circle.radius);
circle.radius = 2;
console.log(circle.radius);
console.log(circle.circleArea);
console.log(circle.circumference);
