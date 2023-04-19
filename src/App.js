import React from 'react';  
import AppNav from './components/AppNav.js';
import BookViewer from './components/BookViewer.js';
import books from './dummyData.js';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class App extends React.Component {  


  constructor(props) {
    super(props);
    this.books = books;
  }

  render() {
    return <>
        <AppNav />
        <Container className='mt-5'>
        <Row>
        {
          this.books.map((item) => 
            <Col>
            <BookViewer 
              key={item.id}
              language={item.language} 
              book={item.book} 
              content={item.content}
            />
            </Col>
          )
        }
        </Row>
      </Container>
    </>
  }
}     


export default App; 