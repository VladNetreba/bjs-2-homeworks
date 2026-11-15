class PrintEditionItem {
	type = null;
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	type = "magazine";
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
	}
}

class Book extends PrintEditionItem {
	type = "book";
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
	}
}

class NovelBook extends Book {
	type = "novel";
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
	}
}

class FantasticBook extends Book {
	type = "fantastic";
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
	}
}

class DetectiveBook extends Book {
	type = "detective";
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}

		return null;
	}
}