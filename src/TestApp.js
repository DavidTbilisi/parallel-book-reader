import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import './App.css';
import BookViewerApi from './components/BookViewerApi.js';
import books from './Books.js';
function TestApp() {

    const [book, setBook] = useState({
        book: 1,
        chapter: 1,
    })
    const [isLang, setLang] = useState({
        ka: true, 
        en: true,
        ru: true,
    })

    const langDefaults = {
        ka: {version: "geo"},
        en: {version: "kjv"},
        ru: {version: "rusv"}
    }
 

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

    function languageVisibility(event) {
        setLang( prev => {
            let lang = event.target.id;
            return {...prev, [lang] : !isLang[lang]}
        })
    }


    return <>
        <Container className='mt-5'>
            <Row> 
                <Col>
                <select onChange={changeBook} className='form-control'>
                    {books.map((book) => {return <option key={`bookid_${book.id}`} value={book.id}>{book.name}</option>})}
                </select> 
                </Col>
                <Col><input type='number' className='w-100 form-control' placeholder='Chapter' onChange={changeChapter}/> </Col>
            </Row>

            <Row> 
                <Col> Book ID: {book.book} </Col> 
                <Col>
                    {Object.keys(isLang).map((lang, key) => 
                        <Form.Check 
                            key={`lang_${key}`} 
                            inline 
                            checked={isLang[lang]} 
                            onChange={languageVisibility} 
                            type="switch" 
                            id={lang} 
                            label={lang} 
                        /> 
                    )}
                </Col>
            </Row>
        </Container>

        <Container fluid className='mt-5'>
            <Row>
                
            {Object.keys(isLang).map((lang, key) => 
                isLang[lang] &&
                <Col>
                    <BookViewerApi 
                        key={`book_${key}`} 
                        lang={lang} 
                        bookId={lang==="ka"?georgianBookId:book.book} 
                        chapter={book.chapter} 
                        version={langDefaults[lang].version} 
                    />
                </Col>
            )}
            </Row>
        </Container>
    </>
}
export default TestApp; 