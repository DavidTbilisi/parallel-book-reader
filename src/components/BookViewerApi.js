import React, {useState, useEffect}  from 'react';
function BookViewer (props) {
  const [book, setBook] = useState([]);

  useEffect(() => {getBook(props.bookId)},[props]);


  function getBook(id) {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(response => response.json())
    .then(data => setBook(data));
  }

      return <>
      <div className='book-reader'>
        <div className='book'>  
            <h2>{book.title}</h2>  
            <p className='language'><small>{book.rating}</small></p>
            <div className='book-content shadow-lg p-3 mb-5 bg-white border border-secondary'>  
                <p>{book.description}</p>
            </div>
        </div>
      </div>
      </>;
  }

export default BookViewer;  