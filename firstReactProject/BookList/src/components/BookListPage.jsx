import { Link } from 'react-router-dom'
import style from '../styles/BookListPage.module.css'
import React, {useState} from 'react'

const BookListPage = ()=> {
    const books = [
        "name f the wild", 
        "waiting for the wind", 
        "the master on the shore"
    ]

    const [booklist, setBookList] = useState(books);
    const [searchBook, setBoook] = useState('')

    const addBook = (event)=> {
    
        if(event.target[0].value != "") {
            event.preventDefault();
            const newBook = event.target[0].value
            setBookList([...booklist, newBook])
            // console.log(newBook)
            event.target[0].value = "";
        }
    }

    const handleDelete = (index)=> {
        setBookList(booklist.filter((_, i)=> (i != index)))
    }

    const handleSearch = (event)=> {
          const result = booklist.filter(book=> (book.toLowerCase().includes(event.target.value)))
          setBookList(result)
    }
    

    return (
        <>
            <div className={style.mainWrapper}>
                <div className={style.wrapper}>
                    <div className={style.todoList}>
                            
                            <header>
                                <div className={style.image}>
                                    <img src="../react.svg" alt=""/>
                                    <div className={style.todolist}>
                                        <p><span>To-</span>Do-List</p>
                                    </div>
                                </div>

                                <div className={style.search}>
                                    <div className={style.searchTaskInputDiv}>
                                        <input type="text" className={style.searchTaskInput} placeholder="search task..." onChange={handleSearch}/>
                                    </div>
                                </div>

                            </header>

                            <div className={style.theList}>
                                <ul>
                                    {

                                        booklist.map((book, index)=> (
                                                <li  key={index}>
                                                    <div className={style.checkBox}>
                                                        <div className={style.theTask}>
                                                            <span className={style.task}>{book}</span>
                                                        </div>

                                                        <div className={style.check}>
                                                            <input type="checkbox" value="completed"/>
                                                            <button className={style.delete} onClick={()=>handleDelete(index)}>delete</button>
                                                        </div>
                                                    </div>
                                                </li>
                                        ))
                                    }
                                </ul>
                        
                            </div>

                            <footer>
                                <div className={style.addTask}>
                                    <form className={style.addTaskInputDiv} onSubmit={addBook}>
                                        <input type="text" className={style.addtaskInput} placeholder="add task..."/>
                                        <div className={style.addButtonDiv}>
                                            <button id={style.addButton} value="add">Add</button>
                                        </div>
                                    </form>
                                </div>
                            </footer>
                    </div>
                </div>
            </div>
        </>
)
}

export default BookListPage