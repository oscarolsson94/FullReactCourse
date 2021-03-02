import React from 'react';
import ReactDom from 'react-dom';

 function Greeting() {
     return (
         <div>
             <h1>This is Oscar and this is my first component</h1>
         </div>
     );
 }

// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world');
// }



ReactDom.render(<Greeting />, document.getElementById('root'));