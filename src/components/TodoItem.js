import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from '../redux/actions/actions';

function TodoItem({item}) {
    const [editValue, setEditValue] = useState(false);
    let [ title, setTitle ] = useState(item.title);
    let [ content, setContent ] = useState(item.content);
    let [ date, setDate ] = useState(item.date);

    let dispatch = useDispatch();

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{ editValue ? <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} /> : item.title }</td>
            <td>{ editValue ? <textarea type="text" className="form-control" value={content} onChange={(e) => setContent(e.target.value)}> </textarea> : item.content }</td>
            <td>{ editValue ? <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)}/> : item.date }</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" 
                            className="btn btn-light btn-sm" 
                            onClick={() => {
                                dispatch(updateTodo(
                                    {
                                        ...item,
                                        title: title,
                                        content: content,
                                        date: date
                                    }
                                ))
                                if (editValue) {
                                    setTitle(item.title);
                                    setContent(item.content);
                                    setDate(item.date);
                                }
                                setEditValue(!editValue);
                            }}>{editValue ? "Update" : "Edit"}</button>
                    {/*  */}
                    <button type="button" 
                        onClick={() => dispatch(deleteTodo(item.id))}
                        className="btn btn-danger btn-sm" >Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default TodoItem;