// 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p); // Expected output: Pricing object with amount and currency
console.log(p.displayFullPrice()); // Expected output: 100 Euro (EUR)

