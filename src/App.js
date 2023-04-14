import React from 'react';  
import BookViewer from './components/BookViewer';   
import AppNav from './components/AppNav'; 

class App extends React.Component {  


  constructor(props) {
    super(props);
    this.state = {color: "Red"}; 
    this.books = [  
        {id: 1, language: "English", book: "Book 1", content: "Lorem ipsum"},  
        {id: 2, language: "Norwegian", book: "Book 1", content: "Lorem ipsum"},   
        {id: 3, language: "Georgian", book: "Book 1", content: "Lorem ipsum"}    
    ];    
  }

  render() {
    return <>
        <AppNav />  

        <h1>Hi {this.state.color}, I am a React App!</h1>
        {
          this.books.map((item) => 
            <BookViewer 
              key={item.id}
              language={item.language} 
              book={item.book} 
              content={item.content}
            />
          )
        }
    
    </>
  }
}     


export default App; 