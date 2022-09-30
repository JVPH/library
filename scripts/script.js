const booksDisplay = document.querySelector('.books-display');
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
        this.books = [];
    }

    addBookToLibrary(book){
        this.books.push(book);
    }

    getBooks(){
        return this.books;
    }
    
    removeBookFromLibrary(index){
        this.books.splice(index, 1);
    }
    
}

const library = new Library();

const displayBook = (book) => {  

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    bookCard.dataset.index = `${library.books.indexOf(book)}`;   

    const bookTitle = document.createElement('p');
    bookTitle.classList.add('title');
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = `Author: ${book.author}`;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.classList.add('num-of-pages');
    bookPages.textContent =`Pages: ${book.nOfPages}`;
    bookCard.appendChild(bookPages);

    
    const labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('read-input-wrapper');
    labelForCheckbox.textContent = 'Read: ';
    labelForCheckbox.setAttribute('for', 'read-book-card')
    const bookToggleRead = document.createElement('input');
    bookToggleRead.setAttribute('type','checkbox');
    bookToggleRead.setAttribute('id','read-book-card');
    bookToggleRead.checked = book.read;
    
    labelForCheckbox.appendChild(bookToggleRead);
    bookCard.appendChild(labelForCheckbox);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-book-btn');
    deleteBtn.textContent = 'Delete';
    bookCard.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        library.removeBookFromLibrary(parseInt(e.currentTarget.parentNode.getAttribute('data-index')));
        e.currentTarget.parentNode.remove();
    });       

    booksDisplay.appendChild(bookCard);
}

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const nOfPagesInput = document.querySelector('#nOfPages');
const readInput = document.querySelector('#read');
const formInput = document.querySelector('#form');



form.addEventListener('submit', (e) => {
    e.preventDefault();    
    const book = new Book(titleInput.value, authorInput.value, nOfPagesInput.value, readInput.checked);  
    library.addBookToLibrary(book);     
    formInput.reset();
    displayBook(book);
});