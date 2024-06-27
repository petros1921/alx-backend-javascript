export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Building is an abstract class and cannot be instantiated directly.");
    }
    this._validateSqft(sqft);
    this._sqft = sqft;
  }

  _validateSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
