function parseCount(value) {
	const result = Number.parseFloat(value);
	if (Number.isNaN(result)) {
		throw new Error('Невалидное значение');
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this._a = a;
		this._b = b;
		this._c = c;

		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		return this._a + this._b + this._c;
	}

	get area() {
		const p = this.perimeter / 2;
		const s = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));

		return Math.round(s * 1000) / 1000;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}