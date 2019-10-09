class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
	return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
	var prices = this.db.get('books').map('price').value();
	var totalPrice = 0;
	for(var i = 0; i < prices.length; i++) {
		totalPrice += prices[i];
	}
	return totalPrice;
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
	return this.db.get('books').find({ name: bookName }).value()
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(bookName) {
	var books = this.db.get('books').sortBy('added_at').value();
	var countCumulative = 0;
	var countIndiv = 0;
	var pushedYear = parseInt(books[0].added_at.split('-')[0],10);
	var pushedMonth = parseInt(books[0].added_at.split('-')[1],10);
	var countBookArray = [];

	books.forEach(function(book) {
		var date = book.added_at.split('-');
		var actualYear = parseInt(date[0],10);
		var actualMonth = parseInt(date[1],10);
		if(actualYear !== pushedYear || actualMonth !== pushedMonth) {
			countBookArray.push({
				year: pushedYear,
				month: pushedMonth,
				count: countIndiv,
				count_cumulative: countCumulative
			});
			countIndiv = 0;

			pushedYear = actualYear;
			pushedMonth = actualMonth;
		}
		countIndiv++;
		countCumulative++;
	});

	countBookArray.push({
		year: pushedYear,
		month: pushedMonth,
		count: countIndiv,
		count_cumulative: countCumulative
	});

	return countBookArray;
    }
}


module.exports = BookRepository;
