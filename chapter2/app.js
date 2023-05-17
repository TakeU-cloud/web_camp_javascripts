const num1 = 6;
const num2 = 3;

let num3 = [];

num3.push(num1.toString() + "+" + num2.toString() + "=" + (num1 + num2).toString());
num3.push(num1.toString() + "-" + num2.toString() + "=" + (num1 - num2).toString());
num3.push(num1.toString() + "*" + num2.toString() + "=" + (num1 * num2).toString());
num3.push(num1.toString() + "/" + num2.toString() + "=" + (num1 / num2).toString());

alert(num3.join("\n"));