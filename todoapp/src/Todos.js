import React from "react";

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item white-text indigo darken-3" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="notodos center white-text">You have no todo's left</p>
    )
    return (
        <div className="list center todos collection">
            {todoList}
        </div>
    )
}

export default Todos;