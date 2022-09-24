let myLibrary = [];

function Book(title, author, nOfPages, read) {
    this.title = title;
    this.author = author;
    this.nOfPages = nOfPages;
    this.read = read;    
}

function addBookToLibrary() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const nOfPages = document.querySelector('#nOfPages');
    const read = document.querySelector('#read');
    const book = new Book(title.value, author.value, nOfPages.value, read.checked);  
    myLibrary.push(book);
}

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();    
    addBookToLibrary();    
});