import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book';
//CSS
import './index.css';

//setup vars
import { books } from './books';

// const names = ["john", "peter", "susan"];
// const newNames = names.map(name => {
//     return <h1>{name}</h1>;
// });


 function BookList() {
     return (
         <section className="booklist">
             {books.map((book) => {
                 return (
                     <Book key={ book.id } { ...book }/>
                 );
            })}
         </section>
     );
 }

ReactDom.render(<BookList />, document.getElementById('root'));