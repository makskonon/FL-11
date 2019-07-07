let a = Number(window.prompt('Please put a'));
let b = Number(window.prompt('Please put b'));
let c = Number(window.prompt('Please put c'));
if (a + b <= c || b + c <= a || a + c <= b ) {
	console.log('Triangle doesn’t exist');
} else if (a === b === c) {
	console.log('Equivalent triangle');
} else if (a === b || b === c || a === c ) {
	console.log('Isosceles triangle');
} else if (a!==b || b!==c || a!==c ) {
	console.log('Normal triangle');
}
