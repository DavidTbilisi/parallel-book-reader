import React, {useState, useEffect}  from 'react';
import { Parser } from 'html-to-react'
function BookViewer (props) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    console.log(props)
    getBook(props.bookId, props.chapter, props.lang, props.version)
  },[props]);


  function getBook(book_id=1, chapter=1, language="ka", version="geo") {
    fetch(`https://davidchincharashvii.pythonanywhere.com/api/${language}/${version}/${book_id}/${chapter}`)
    .then(response => response.json())
    .then(data => setBook(data));
  }

      return <>
      <div className='book-reader'>
        <div className='book'>

           
            <h2 className='mb-3'>{book.book} {book.chapter}</h2>  
            <div className='book-content shadow-lg p-3 mb-5 bg-white border border-secondary'>  
            { book.verses !== undefined 
              ? Object.values(book.verses).map((v,k) => {
                  return <p key={k} style={{fontSize:27}}>{Parser().parse(v)}</p>
                })
              : "Nothing is in verses"
            }
            </div>
        </div>
      </div>
      </>;
  }

export default BookViewer;  