// 1. Import
import { fahrenheit, celcius} from "./module.js";
console.log(`${fahrenheit} Fahrenheit`);
console.log(`${celcius} Celcius`);
console.log(`${fahrenheit.toFixed(2)} Fahrenheit = ${celcius.toFixed(2)} Celcius`);

import { berat, tinggi } from "./module.js"
import { bmi, category } from "./module.js";
// 2. Import Default
import BMI from "./module.js";
console.log(`BMI Anda ${bmi.toFixed(2)}, yang artinya ${category}.`);

