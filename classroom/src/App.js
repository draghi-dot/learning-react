import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Desk extends React.Component {
  render() {
    return (
      <div style={{
        height: '28px',
        width: '90px',
        backgroundColor: '#5D4037',
        display: 'inline-block',
        margin: '20px',
        marginLeft: '50px'
      }}>

      <div style={{
        height: '15px',
        width: '20px',
        backgroundColor: this.props.color,
        display: 'inline-block',

      }}></div>

      <div style={{
        height: '10px',
        width: '20px',
        backgroundColor: '#A1887F',
        display: 'inline-block',
        margin: "17px",
        marginLeft: "35px"
      }}></div>

      </div>
    );
  }
}
class WhiteBoard extends React.Component {
  render() {
    return (
      <div style={{
        height: '15px',
        width: '350px',
        backgroundColor: '#D9D9D9',
        display: 'inline-block',
        margin: '20px',
        marginLeft: '70px'
      }}></div>
    );
  }
}

class Windows extends React.Component {
  render() {
    return (
      <div style={{
        height: '100px',
        width: '10px',
        backgroundColor: '#4FC3F7',
        display: 'inline-block',
        marginRight: '500px'
      }}></div>
    )
  }
}
class MainDesk extends React.Component {
  render() {
    return (
      <div style={{
        height: '28px',
        width: '125px',
        backgroundColor: '#5D4037',
        display: 'inline-block',
        margin: '20px',
        marginLeft: '190px'
      }}></div>
    )
  }
}


class MyClassroom extends React.Component {
  render() {
    return (
      <h1 style={{color: 'black'}}>My Classroom.</h1>
    );
  }
}

function App() {
  return (
    <div>
      <MyClassroom />
      <WhiteBoard />
      <br></br>
      {/*banci*/}
      <MainDesk />
      <br></br>
      <Desk color = 'red'/>
      <Desk color = 'brown'/>
      <Desk color = 'green'/>
      <br></br>
      <Desk />
      <Desk />
      <Desk />
      <br></br>
      <Desk />
      <Desk />
      <Desk />
      <br></br>
      <Desk />
      <Desk />
      <Desk />     
    </div>
  );
}

export default App;
