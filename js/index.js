// Iteration 1: Names and Input

const hacker1 = "Helene";

console.log(`\"The driver's name is ${hacker1}\"`);

const hacker2 = "Stephan";

console.log(`\"The navigator's name is ${hacker2}\"`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
}
else {
	console.log(`Wow, you both have equally long names, it has ${hacker1.length} characters.`);
}

// Iteration 3: Loops

let driverNameUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
	driverNameUpperCase += hacker1[i].toUpperCase();
	if (i + 1 < hacker1.length) {
		driverNameUpperCase += " ";
	}
}
console.log(driverNameUpperCase);

let navigatorNameReversed = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
	navigatorNameReversed += hacker2[j];
}

console.log(navigatorNameReversed);

for (let k = 0; k < hacker1.length && k < hacker2.length; k++) {
	if (hacker1[k] < hacker2[k] || (hacker1.length === k + 1 && hacker2.length > k + 1)) {
		console.log(`The driver's name goes first.`);
		break;
	}
	else if (hacker2[k] < hacker1[k] || (hacker2.length === k + 1 && hacker1.length > k + 1)) {
		console.log(`Yo, the navigator goes first definitely.`);
		break;
	}
	else if (hacker1[k] === hacker2[k] && k + 1 === hacker2.length && k + 1 === hacker1.length) {
		console.log("What?! You both have the same name?");
		break;
	}
}
