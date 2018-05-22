import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component{
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(items){
        return <li onClick={() => this.delete(items.key)}
                    key={items.key}>{items.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(
            <ul className="theList">
            <FlipMove duration={300} easing="ease-out">
                {listItems}
            </FlipMove>
            </ul>
        );
    }
}

export default ToDoItems;