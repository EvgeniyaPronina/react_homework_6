import React, {Component} from 'react';
import './App.css';
import Market from '../Market'
import Farm from '../Farm'
import Budget from '../Budget'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Market />
                {/*<Farm />*/}
                {/*<Budget />*/}
            </div>
        )
    }
}

export default App