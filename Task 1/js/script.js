'use strict'

class Marker {
	constructor(colorMarker) {
		this.colorMarker = colorMarker;
		this.inkQuantity = 100;
	}

	toPrint (str) {
		const strLen = str.length;
		let strPrint = '';

		for (let i = 0; i < strLen; i++) {
			if (this.inkQuantity > 0 && str[i] !== '') {
				strPrint += str[i];
				this.inkQuantity -= 0.5;
			}
		}

		console.log('%c%s', `color: ${this.colorMarker}`,strPrint);
	}

	info() {
		console.log(`color: ${this.colorMarker}, quantity ink: ${this.inkQuantity}%`);
	}
}


class RefuelingMarker extends Marker {
	refueling () {
		this.inkQuantity = 100;
	}
}

// console.log('%c%s', 'color: orange','hello');


const blueMarker = new Marker('blue');

blueMarker.toPrint('Hello world');

const redRefuelingMarker = new RefuelingMarker('red');

redRefuelingMarker.toPrint('redRefuelingMarker print');
redRefuelingMarker.info();
redRefuelingMarker.refueling();
redRefuelingMarker.info();
