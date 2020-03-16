import React, {Component} from 'react';
import './App.css';
import Navigation from  '../src/components/Navigation'
import { todos } from './todos'

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Task app',
            nTask: 10,
            todos,
        }
    }

    render() {

        // map traverse an object
         const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                        </div>
                        <div className="classBody">
                            <p>{todo.description}</p>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="App">
                <Navigation title={this.state.title}/>
                <div className="container">
                    <div className="row mt-4">
                        {todos}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
