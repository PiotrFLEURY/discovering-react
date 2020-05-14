import React from 'react';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        }, () => console.log(this.state.userInput));
    }

    addTodo(event) {
        event.preventDefault();
        if (this.state.items.includes(this.state.userInput)) {
            this.setState({
                error: "l'item existe déjà !"
            });
        } else {
            this.setState({
                error: "",
                userInput: "",
                items: [...this.state.items, this.state.userInput]
            }, console.log(this.state));
        }
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item} className="list-group-item">
                    {item} | <button className="btn btn-danger" onClick={this.deleteTodo.bind(this, item)}>
                        <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            );
        });
    }

    renderError() {
        if (this.state.error === '') {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="alert alert-primary" role="alert">
                    {this.state.error}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1 align="center">Ma Todo list</h1>
                <form className="form-row align-items-center">
                    <input
                        className="form-control mb2"
                        type="text"
                        placeholder="Renseignez un item"
                        value={this.state.userInput}
                        onChange={this.onChange.bind(this)}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={this.addTodo.bind(this)}
                    >
                        Ajouter
                    </button>
                </form>
                <br />
                {this.renderError()}
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;