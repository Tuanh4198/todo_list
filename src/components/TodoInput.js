import React, { useState } from 'react'
import { addTodo } from '../redux/actions/actions'
import { v1 as uuid } from 'uuid'
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [ title, setTitle ] = useState('');
    let [ content, setContent ] = useState('');
    let [ date, setDate ] = useState('');
    
    let dispatch = useDispatch();
    
    return (
        <div className="col-4">
            <form   autoComplete="off" >
                <div className="form-group">
                    <label htmlFor="notetitle">Title</label>
                    <input  name="notetitle" 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="notecontent">Content</label>
                    <textarea   name="notecontent" 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter content..." 
                                value={content}
                                onChange={(e) => setContent(e.target.value)} >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="notedate">Date</label>
                    <input  name="notedate" 
                            type="date" 
                            className="form-control"
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} />
                </div>
                <button type="submit" 
                        className="btn btn-dark btn-block" 
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(addTodo(
                                {
                                    id: uuid(),
                                    title: title,
                                    content: content,
                                    date: date
                                }
                            ));
                            setTitle('');
                            setContent('');
                            setDate('');
                        }}>Save</button>
            </form>
        </div>
    )
}

export default TodoInput
