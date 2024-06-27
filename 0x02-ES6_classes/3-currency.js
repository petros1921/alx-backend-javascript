export default class Currency {
  constructor(code, name) {
    this._validateCode(code);
    this._validateName(name);

    this._code = code;
    this._name = name;
  }

  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._validateCode(value);
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
