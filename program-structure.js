// Exercise 1 looping a triangle

var s = '';
for (var i = 0; i < 7; i++) {
	s += '#';
	console.log(s);
}

// Exercise 2 FizzBuzz

for (var i = 1; i < = 100; i++) {
    if (i % 15 === 0)
        console.log('FizzBuzz');
    else if (i % 3 === 0)
        console.log('Fizz');
    else if (i % 5 === 0)
        console.log('Buzz');
    else
        console.log(i);
}
