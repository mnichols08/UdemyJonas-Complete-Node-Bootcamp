const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log('Timer 1 finished'), 0); // second

setImmediate(() => console.log('Imediate 1 finished')); // third

fs.readFile('test-file.txt', () => {
	console.log('I/O finished'); // fourth
	console.log('----------------'); // fifth
	setTimeout(() => console.log('Timer 2 finished'), 0); // seventh
	setTimeout(() => console.log('Timer 3 finished'), 3000); // twelvth

	process.nextTick(() => console.log("process.nextTick")); //sixth

	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted'); // eigth
	})
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted'); // ninth
	})
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted'); // tenth
	})
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted'); // eleventh
	})
 });

console.log('Hello from top level code');  // first
