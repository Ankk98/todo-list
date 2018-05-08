import React, { Component } from 'react';

class ToDoList extends Component{
    render(){
        return(
        <div className="ToDoList">
            <div className="header">
                <form>
                    <input placeholder="Enter a task"></input>
                    <button type="submit">Add to the List</button>
                </form>
            </div>
        </div>
        );
    }
}

export default ToDoList;