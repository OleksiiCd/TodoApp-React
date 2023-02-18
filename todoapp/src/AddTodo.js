import React, { Component } from "react";

class AddTodo extends Component{
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="white-text">Add new Todo:</label>
                    <input 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.content}
                        className="white-text"
                        id="inputOne"
                        />
                </form>
            </div>
        )
    }
}

export default AddTodo