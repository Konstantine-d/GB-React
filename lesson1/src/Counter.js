import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                < span > { this.props.count} </span>
                <button onClick={this.props.onIncrease}>Increase</button>
                <form>
                <input onClick = {this.props.message}></input>
                    <button 
                        onClick = {this.props.message}
                    >Send
                        </button>
               </form>
               
            </div>
        )
    };
}