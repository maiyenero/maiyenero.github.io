function fibonacci() {

	let Fstart = 0; // current number in fib 
	let Fnext = 1; //next number in fib

	return function () {
		let currNum = Fstart; //store current value to return 
		[Fstart, Fnext] = [Fnext, Fstart + Fnext]; ///update to next values in sequence 
		return currNum;
	};
}
		

//Test Cases 

let fibGenerator1 = fibonacci(); // fibonacci() returns a closure
let fibGenerator2 = fibonacci(); // fibonacci() returns a closure

console.log(fibGenerator1()); // prints 0, i.e., F(0)
console.log(fibGenerator1()); // prints 1, i.e., F(1)
console.log(fibGenerator1()); // prints 1, i.e., F(2)
console.log(fibGenerator1()); // prints 2, i.e., F(3)
console.log(fibGenerator1()); // prints 3, i.e., F(4)

console.log(fibGenerator2()); // prints 0, i.e., F(0)
console.log(fibGenerator2()); // prints 1, i.e., F(1)
console.log(fibGenerator2()); // prints 1, i.e., F(2)
console.log(fibGenerator2()); // prints 2, i.e., F(3)
console.log(fibGenerator2()); // prints 3, i.e., F(4)
