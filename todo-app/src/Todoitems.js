import React, { Component } from 'react';

class ToDoItems extends Component{
    createTasks(items){
        return <li key={items.key}>{items.text}</li>
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoItems;