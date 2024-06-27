import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._validateAmount(amount);
    this._validateCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
  }

  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._validateAmount(value);
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._validateCurrency(value);
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
