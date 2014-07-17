var calc = require("../../src/js/calc.js");

describe('A unit test to test my calc', function(){
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

	it("should return the division", function(){
		var div = calc.divideTwoNumbers(10,2);
		expect(div).toEqual(5);
	});

	it("should return that impossible", function(){
		var div = calc.divideTwoNumbers(10,0);
		expect(div).toEqual('You cant divide by 0');
	});

});
