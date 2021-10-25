import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfHours: 0,
      numberOfMinutes: 0,
      numberOfSeconds: 0,
      reset: true
    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  handleStartButtonClick = (event) => {
    var element = (
      <div>
        {this.state.numberOfHours} h {this.state.numberOfMinutes} m {this.state.numberOfSeconds} s
      </div>
    );
    ReactDOM.render(element, document.getElementById('timer'))
  }

  handleResetButtonClick = () => {
    this.setState({
      numberOfHours: 0,
      numberOfMinutes: 0,
      numberOfSeconds: 0,
      reset: true
    })

    var timerInputForm = this.renderTimeInputForm();
    ReactDOM.render(timerInputForm, document.getElementById('timer'))
  }

  renderTimeInputForm = () => {
    return (
      <form>
        <label>
          <input 
            type="text" 
            name="numberOfHours"
              onChange={this.handleChange} 
          />
          h
        </label>
        <label>
          <input 
            type="text" 
            name="numberOfMinutes"
            onChange={this.handleChange} 
          />
            m
          </label>
          <label>
            <input 
              type="text" 
              name="numberOfSeconds"
              onChange={this.handleChange} 
          />
            s
          </label>
      </form>
    )
  }

  render() {

    // var initialText = this.state.reset ? this.initialText : "";
    // console.log(initialText)
    
    var somethingText = this.renderTimeInputForm();
    
    return (
      <div className="App">
        <div id="timer" className="Timer">
          {somethingText}
        </div>
        <div className="Buttons">
          <button 
            onClick={this.handleStartButtonClick} 
            name="startButton">
            Start
          </button>
          <button 
            onClick={this.handleResetButtonClick} 
            name="resetButton">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;