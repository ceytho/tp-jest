const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });

});
describe('Book repository Count', function () {
	test('Count books', () => {
		const dbMock = {
           	    get : jest.fn().mockReturnThis(),
       		    push : jest.fn().mockReturnThis(),
        	    write : jest.fn().mockReturnThis(),
		    size : jest.fn().mockReturnThis(),
	            value : jest.fn().mockReturnValue(1)
		};

        	const repository = new BookRepository(dbMock);
		expect(repository.getTotalCount()).toBe(1);
	});
});

describe('Book repository Total Price', function() {
	test('Count price of books', () => {
		const dbMock = {
			get : jest.fn().mockReturnThis(),
			map : jest.fn().mockReturnThis(),
			value : jest.fn().mockReturnValue([1,4,5])
		};
		const repository = new BookRepository(dbMock);
		expect(repository.getTotalPrice()).toBe(10);
	});
});

describe('Book repository GetBookByName', function() {
	test('Get a book by its name', () => {
		let testBook = {
            		id : 1,
            		name : "Unit test",
			price : 2
		};
		const dbMock = {
			get : jest.fn().mockReturnThis(),
			find : jest.fn().mockReturnThis(),
			value : jest.fn().mockReturnValue(testBook)
		};
		const repository = new BookRepository(dbMock);
		//expect(repository.getBookByName('Unit test').get('name')).toStrictEqual(testBook.name);
		expect(repository.getBookByName('Unit test')).toStrictEqual(testBook);
	});
});

describe('Book repository GetCountBookAddedByMonth', function () {
    test('getCountBookAddedByMont', () => {
        let bookList = [
		{added_at: "2019-09-03"},
		{added_at: "2019-10-04"},
		{added_at: "2019-10-27"}
	];
        let answer = [
                    {
                        year: 2019,
                        month: 9,
                        count: 1,
                        count_cumulative: 1
                    },
                    {
                        year: 2019,
                        month: 10,
                        count: 2,
                        count_cumulative: 3
                    },
	];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            sortBy : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(bookList)
        };
        const repository = new BookRepository(dbMock);
        expect(repository.getCountBookAddedByMont()).toStrictEqual(answer);
    });
});

