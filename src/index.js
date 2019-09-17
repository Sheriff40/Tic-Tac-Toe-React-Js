import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component{
    constructor(){
        super();
        this.state ={squares: Array(9).fill(null), isXNext: true, playerStatus: "X"}
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>
    }

    handleClick(i){
        const dupSquares = this.state.squares.slice();
        if(dupSquares[i]==null && calculateWinner(dupSquares)==null){
            dupSquares[i] = this.state.isXNext? "X" : "O";
            this.setState({squares:dupSquares, isXNext: !this.state.isXNext} );
            let winner = calculateWinner(dupSquares);
            if(winner)
            {
                this.setState({playerStatus: "Winner is " + winner})

            }
            else
            {
                this.setState({playerStatus: this.state.isXNext?"O" : "X"})
            }
        }

    }

    render(){
        return(
            <div>
                <div>{this.state.playerStatus}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component{
    render(){
        return(
            <div>
                <Board/>
            </div>
        )
    }
}

function Square(props) {
    return(
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(<Game/>, document.getElementById('root'));