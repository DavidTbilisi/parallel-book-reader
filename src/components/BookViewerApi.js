import React, {useState, useEffect}  from 'react';
function BookViewer (props) {
  const [book, setBook] = useState([]);

  useEffect(() => {getBook(props.bookId, props.chapter, props.lang, props.version)},[props]);


  function getBook(book_id=1, chapter=1, language="ka", version="geo") {
    fetch(`https://davidchincharashvii.pythonanywhere.com/api/${language}/${version}/${book_id}/${chapter}`)
    .then(response => response.json())
    .then(data => setBook(data));
  }

      return <>
      <div className='book-reader'>
        <div className='book'>  
            <h2>{book.book}</h2>  
            <p className='language'><small>{book.chapter}</small></p>
            <div className='book-content shadow-lg p-3 mb-5 bg-white border border-secondary'>  
                {
                  Object.values(book.verses)
                }
            </div>
        </div>
      </div>
      </>;
  }

export default BookViewer;  