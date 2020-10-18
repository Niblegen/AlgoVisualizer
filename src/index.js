import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LinearSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }

  onValueChange = event =>{
    this.setState({ value: event.target.value });
  }

  render(){
    let value = this.state.value.split(" ");

    const spliiter = value.map((step, i) =>{
      return(
        <li key={i} className="li-box">
          {step}
        </li>
      );
    });

    return(
      <div>
        <form className="my-form">
          <label htmlFor="number">Input Number: </label>
          <input
            type="text"
            name="number"
            defaultValue={this.state.value}
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
