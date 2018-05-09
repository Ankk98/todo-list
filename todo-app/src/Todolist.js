import React, { Component } from 'react';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

        this.setState((prevState) => {
            return{
                items: prevState.items.concat(newItem)
            }
        });
        };
        this._inputElement.value = "";
        console.log(this.state.items);

        
    }
    render(){
        return(
        <div className="ToDoList">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                    placeholder="Enter a task"></input>
                    <button type="submit">Add to the List</button>
                </form>
            </div>
        </div>
        );
    }
}

export default ToDoList;