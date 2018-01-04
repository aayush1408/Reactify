import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {turn:'x',
    finished:false,
    board:Array(9).fill(''),
    totalMoves:0,
    winner:'',
    winnerLine:''
  }
    this.clicked = this.clicked.bind(this);
  }


  clicked(e){
    if(this.state.board[e.target.dataset.square] === '')
    {
    this.state.board[e.target.dataset.square] = this.state.turn;
    e.target.innerText = this.state.turn;
    this.setState({
      turn:this.state.turn =='x' ?'o':'x',
      board:this.state.board,
      totalMoves:this.state.totalMoves+1
    });
  }

    var result = this.checkWinner();

    if(result == 'x') {
      this.state.finished = true;
      this.setState({
        winner: 'X',
        winnerLine:'Winner is X'
      });
    } else if(result == 'o') {
      this.state.finished = true;
      this.setState({
        winner: 'o',
        winnerLine:'Winner is 0'
      });
    } else if(result == 'draw') {
      this.state.finished = true;
      this.setState({
        winner: 'draw',
        winnerLine:'Draw'
      })
    }
  }

 checkWinner() {
    var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    var board = this.state.board;
    for(let i=0;i<moves.length;i++) {
      if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
          return board[moves[i][0]];
    }

    console.log(this.state.totalMoves);
    if(this.state.totalMoves == 9) {
      return 'draw';
    }
  }

  render() {
    return (
            <div id="game">
                <div id="head">TIC-TAC-TOE</div>
                <div id="status">{this.state.winnerLine}</div>
                    <div id="board" onClick ={this.clicked}>
                        <div className="square" data-square="0" ></div>
                        <div className="square" data-square="1"></div>
                        <div className="square" data-square="2"></div>
                        <div className="square" data-square="3"></div>
                        <div className="square" data-square="4"></div>
                        <div className="square" data-square="5"></div>
                        <div className="square" data-square="6"></div>
                        <div className="square" data-square="7"></div>
                        <div className="square" data-square="8"></div>

                    </div>
                
            </div>
    )
  }
}

export default App;
