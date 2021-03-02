import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
//CSS

 function BookList() {
     return (
         <section className="booklist">
             <Book />
             <Book />
             <Book />
             <Book />
             <Book />
             <Book />
             <Book />
             <Book />
             <Book />
         </section>
     );
 }

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
};
 
const Image = () => {
    return <img src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg" alt="" />;
};

const Title = () => {
    return <h1>Rich Dad Poor Dad: What the Rich Teach Their…</h1>;
}

const Author = () => {
    return <h4>Robert T. Kiyosaki</h4>
}


ReactDom.render(<BookList />, document.getElementById('root'));