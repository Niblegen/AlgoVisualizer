import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LinearSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      values: [{
        value: Array(6).fill(null)
      }],
    };
  }

  onValueChange = event =>{
    this.setState({ 
      userInput: event.target.value 
    });
  }

  render(){
    let values = this.state.values[0];
    let value = this.state.userInput.split(" ");

    values.value.splice(0, value.length);
    values.value = value.concat(values.value)

    const spliiter = values.value.map((step, i) =>{
      return(
        <li key={i} className="li-box">
          {step}
        </li>
      );
    })

    return(
      <div>
        <form className="my-form">
          <label htmlFor="qqq">Input Number: </label>
          <input
            type="text"
            name="number"
            defaultValue={this.state.userInput}
            onChange={this.onValueChange}
          />
        </form>
        <div>
          <ul className="value-table">{spliiter}</ul>
        </div>
        
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <LinearSearch />,
  document.getElementById('root')
);

// ========================================
