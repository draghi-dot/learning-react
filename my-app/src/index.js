import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <object className="bigsquare" style={{backgroundColor: this.props.color}}>
      <object className="square" style={{backgroundColor: this.props.color}}></object>
      <object className="whiteboard" style={{backgroundColor: this.props.color}}></object>
        {/* TODO */}
      </object>
      
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <div>
          <Square value={2}/>
      </div>
    );
  }
  render() {
    const status = 'Planul Clasei';


    return (
      <div>
        <div className = "status">{status}</div>
        <div className = "bigsquare">
          {this.renderSquare()}
          <div className = "square">
          {this.renderSquare()}
          </div>
          <div className = "whiteboard">
          {this.renderSquare()}
          </div>
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
