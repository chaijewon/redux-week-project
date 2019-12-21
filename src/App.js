import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
class App extends Component{
  render() {
    return (
        <React.Fragment>
          <Counter/>
          <Button/>
        </React.Fragment>
    )
  }
}

export default App;
