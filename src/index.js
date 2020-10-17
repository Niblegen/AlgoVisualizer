import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class AlgoVisual extends React.Component {
  constructor(props) {
    super(props);
    this.value = this.props.value;
    this.testVarible= "this is a test";
  }
    // let value = {props.value};

  render(){
    return(
      <div>
        {this.props.value}
        qweqweqweqw
      </div>
      
    );
  }
}

class LinearSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    return (
      <AlgoVisual
        value = {this.state.value}
        
      />
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// ========================================

ReactDOM.render(
  <LinearSearch />,
  document.getElementById('root')
);

// ========================================
