import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';

//setup vars
import { books } from './books'; //export as named export
import Book from './Book'; //default export

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