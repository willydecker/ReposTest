//William Decker
//jan 26
//this finds if a value is even and either be true or false



function isEven(x) {
		if (x == 0) {
			return true;
		}	
		else if (x == 1) {
		       	return false;
		}
		else if (x < 0) {
			return isEven(-x);
		}
		else
			return isEven(x-2);
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(-2));
