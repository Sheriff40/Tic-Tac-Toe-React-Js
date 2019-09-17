import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component{
    renderSquare(){
        return <Square/>
    }
    render(){
        return(
            <div>
                <div>Next player {this.props.value}</div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
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

class Square extends React.Component{
    constructor(){
        super();
        this.state = {value: null}
    }

    // changeState(){
    //     // this.setState({value:"X"})
    //     return(
    //         <div>
    //             <Board status={this.state.value}/>
    //             {console.log(this.state.value)}
    //         </div>
    //
    //     )
    // }
    render(){
        return(
            <button className="square" onClick={()=>this.setState({value:"X"})}>{this.state.value}</button>
        )
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));