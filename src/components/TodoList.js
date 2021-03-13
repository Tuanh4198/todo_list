import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    let todos = useSelector(state => state)

    return (
        <div className="col">
            <div className="form-group">
                <label>Search</label>
                <input  type="text" className="form-control" name="key" placeholder="Enter your key word..." />
                <button type="button" className="btn btn-dark">Search</button>
            </div>
            <br/>
            <div className="table-responsive">
                <table className="table table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Date</th>
                            <th scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((item, index) => {
                                return <TodoItem key={item.id} item={item} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;