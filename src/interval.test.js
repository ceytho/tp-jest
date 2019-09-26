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

