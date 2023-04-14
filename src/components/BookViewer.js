import React from 'react';

class BookViewer extends React.Component {
    constrctor(props) {   
        this.state = {
            language: "English", 
            book: "Book 1", 
            content: "Lorem ipsum"
        };    
    }
    render() {
     
      return <>
      <div className='book-reader'>
        <div className='language'> 
            <h1>{this.props.language}</h1>
        </div>
        <div className='book'>  
            <h1>{this.props.book}</h1>  

            <div className='book-content'>  
                <p>{this.props.content}</p>
            </div>
        </div>
      </div>
      </>;
    }
  }

export default BookViewer;  