class Book {
    constructor(title, author, nOfPages, read) {
        this.title = title;
        this.author = author;
        this.nOfPages = nOfPages;
        this.read = read;    
    }
}
class Library {
    constructor(){
        this.library = [];
    }

    addBook(book){
        this.library.push(book);
    }

    getBooks(){
        console.log(this.library);
    }    
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
    library.addBook(book);    
    
});