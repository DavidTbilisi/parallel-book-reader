import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './App.css';
import BookViewerApi from './components/BookViewerApi.js';
import books from './Books.js';
function TestApp() {

    const [book, setBook] = useState({
        book: 1,
        chapter: 1,
    })

    const [georgianBookId, setGeorgianBookId] = useState(1);

    function changeBook(event) {
        setBook(prev => { return {...prev, book: event.target.value}})
        setGeorgianBookId(getGeoBookId(event.target.value))               
    }
    function changeChapter(event) {
        setBook(prev => { return {...prev, chapter: event.target.value}})
    }

    function getGeoBookId(book_id) {
        if (book_id >= 59 && book_id <= 65) return book_id - 14;  
        else if (book_id >= 45 && book_id <= 58) {return parseInt(book_id) + 7}    
        else return book_id;                
    }

    return <>
        <Container className='mt-5'>
            <Row> 
                <Col>
                <select onChange={changeBook} className='form-control'>
                    {books.map((book) => {return <option key={book.id} value={book.id}>{book.name}</option>})}
                </select> 
                </Col>
                <Col><input type='number' className='w-100 form-control' placeholder='Chapter' onChange={changeChapter}/> </Col>
            </Row>

            <Row> Book ID: {book.book}</Row>
        </Container>

        <Container fluid className='mt-5'>
            <Row>
                <Col><BookViewerApi lang="ka" bookId={georgianBookId} chapter={book.chapter} version="geo" /></Col>
                <Col><BookViewerApi lang="en" bookId={book.book} chapter={book.chapter} version="kjv" /></Col>
                <Col><BookViewerApi lang="ru" bookId={book.book} chapter={book.chapter} version="rusv" /></Col>
            </Row>
        </Container>
    </>
}
export default TestApp; 