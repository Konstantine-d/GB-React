import React from "react";
// import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//     </div>
//   );
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    handelIncrease = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }))
    };
    render() {
        return ( < div className = "Wrapper" >
            <Counter count = { this.state.counter} onIncrease = { this.handelIncrease }/> </div >
        )
    };
}

export default App;