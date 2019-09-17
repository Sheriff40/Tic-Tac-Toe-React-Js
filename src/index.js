import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component{
    constructor(){
        super();
        this.state ={squares: Array(9).fill(null)}
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>
    }

    handleClick(i){
        const dupSquares = this.state.squares.slice();
        dupSquares[i] = "X";
        this.setState({squares:dupSquares})
    }

    render(){
        return(
            <div>
                <div>Next player {this.props.value}</div>
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
        <button className="square" onClick={()=>props.onClick()}>{props.value}</button>
    )
}



ReactDOM.render(<Game/>, document.getElementById('root'));