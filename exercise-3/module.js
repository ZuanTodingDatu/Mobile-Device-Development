function fahKeCel(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}
let fahrenheit = 99.20;
let celcius = fahKeCel(fahrenheit);
// 1. Export 
export {fahrenheit, celcius};

function BMI(berat, tinggi) {
    let bmi = berat / (tinggi ** 2);
    
    if (bmi < 18.5) {
        return [bmi, "berat badan anda kurang kurang dari normal"];
    } else if (bmi < 25) {
        return [bmi, "Normal"];
    } else if (bmi < 30) {
        return [bmi, "berat badan anda lebih dari normal"];
    } else {
        return [bmi, "anda harus kurangi makan"];
    }
}

let berat = 55;
let tinggi = 1.65;
let [bmi, category] = BMI(berat, tinggi);

export {berat, tinggi};
export {bmi, category};
// 2. Exporrt Default
export default BMI;