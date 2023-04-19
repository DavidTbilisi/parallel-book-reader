import React from 'react';
class BookViewer extends React.Component {
    render() {
      return <>
      <div className='book-reader'>
        <div className='book'>  
            <h1>{this.props.book}</h1>  
            <p className='language'><small>{this.props.language}</small></p>
            <div className='book-content shadow-lg p-3 mb-5 bg-white border border-secondary'>  
                <p>{this.props.content}</p>
            </div>
        </div>
      </div>
      </>;
    }
  }

export default BookViewer;  