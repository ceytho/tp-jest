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

describe('intersection', function() {
	var int1 = new Interval(1,5);
        var int2 = new Interval(6,9);
        var int3 = new Interval(3,7);
	test('Test intersect 1 faux', () => {
		var tab = int1.intersection(int2);
    		expect(tab.length).toBe(0);
	});
	test('Test intersect 2 output taille 1 et resultat OK', () => {
		var tab = int1.intersection(int3);
    		expect(tab).toEqual([new Interval(3,5)]);
	});
});

describe('exclusion', function () {
	var int1 = new Interval(1,5);
        var int2 = new Interval(6,9);
        var int3 = new Interval(3,7);
	test('Test intersect int1 et int2 result output taille 2', () => {
		var tab = int1.exclusion(int2);
    		expect(tab.length).toBe(2);
	});
	test('Test intersect int2 et int3 result output', () => {
		var tab = int2.exclusion(int3);
    		expect(tab).toEqual([new Interval(3,6),new Interval(7,9)]);
	});
});
