const booksDisplay = document.querySelector('.books-display');
class Book {
    constructor(title, author, nOfPages, read) {
        this.title = title;
        this.author = author;
        this.nOfPages = nOfPages;
        this.read = read;    
    }

    toString() {        
        const read = this.read ? 'Yes' : 'No';
        return `${this.title}\nBy ${this.author}\n${this.nOfPages} pages\nRead? ${read}`
    }
}
class Library {
    constructor(){
        this.books = [];
    }

    addBookToArray(book){
        this.books = this.books.concat(book);
    }

    getBooks(){
        console.log(this.books);
    }  
    
}

const displayBooksFromArray = (book) => {    
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-element');    
    const p = document.createElement('p');
    p.textContent = book.toString();
    bookElement.appendChild(p);
    booksDisplay.appendChild(bookElement);          
}

const library = new Library();
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const nOfPages = document.querySelector('#nOfPages');
const read = document.querySelector('#read');
const form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
    e.preventDefault();    
    const book = new Book(title.value, author.value, nOfPages.value, read.checked);  
    library.addBookToArray(book);     
    form.reset();
    displayBooksFromArray(book);
});