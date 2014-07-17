var calc = require("../src/js/calc.js");

describe('A unit test', function(){
	it("should return the sum", function(){
		var sum = calc.addTwoNumbers(5,5);
		expect(sum).toEqual(10);
	});

	it("should return the subtraction", function(){
		var sub = calc.subTwoNumbers(5,5);
		expect(sub).toEqual(0);
	});

	it("should return the multiplication", function(){
		var mult = calc.multTwoNumbers(5,5);
		expect(mult).toEqual(25);
	});
});
