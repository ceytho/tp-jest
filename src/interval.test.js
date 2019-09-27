const Interval = require('./interval');

describe('overlaps', function() {
        var int1 = new Interval(0,4);
        var int2 = new Interval(1,2);
	var int3 = new Interval(5,7);

        test('Test overlap true', () => {
            expect(int1.overlaps(int2)).toBe(true);
        });

	test('Test overlap false', () => {
	    expect(int1.overlaps(int3)).toBe(false);
	});

});

describe('includes', function() {
	var int1 = new Interval(0,4);
	var int2 = new Interval(1,2);
	var int3 = new Interval(4,5);
	test('Test includes true', () => {
		expect(int1.includes(int2)).toBe(true);
	});
	test('Test includes false', () => {
		expect(int1.includes(int3)).toBe(false);
	});
});

describe('union', function() {
        var int1 = new Interval(0,4);
        var int2 = new Interval(1,2);
        var int3 = new Interval(4,5);
        test('Test union 1', () => {
		expect(int1.union(int2)).toStrictEqual([new Interval(0,4)]);
	});
});
