export default class HolbertonClass {
  constructor(size, location) {
    this._validateSize(size);
    this._validateLocation(location);

    this._size = size;
    this._location = location;
  }

  _validateSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
  }

  _validateLocation(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
