import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                < span > { this.props.count} </span>
                <button onClick={this.props.onIncrease}>Increase</button>
            </div>
        )
    };
}