const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Ensure the clone method is unique per instance using a Symbol
    this[cloneSymbol] = this.cloneCar.bind(this);
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    return new this.constructor(_brand, _motor, _color);
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this._brand} - ${this._motor} - ${this._color}`;
    }
    return NaN;
  }
}
