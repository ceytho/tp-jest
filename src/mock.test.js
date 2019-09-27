function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe('mock tests', function() {
	const mockCallback = jest.fn(x => 42 + x);
	forEach([0, 1], mockCallback);

	test('mock called twice', () => {
		// The mock function is called twice
		expect(mockCallback.mock.calls.length).toBe(2);
	});

	test('mock first arg of first call was 0', () => {
		// The first argument of the first call to the function was 0
		expect(mockCallback.mock.calls[0][0]).toBe(0);
	});

	test('first arg of second call was 1', () => {
		// The first argument of the second call to the function was 1
		expect(mockCallback.mock.calls[1][0]).toBe(1);
	});

	test('return value of the first call to the fct was 42', () => {
		// The return value of the first call to the function was 42
		expect(mockCallback.mock.results[0].value).toBe(42);
	});
});
