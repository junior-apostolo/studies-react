import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);

    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>contador: {count}</h1>

        <button type="button" onClick={handleClick}>
          Reverse
        </button>
      </header>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reverse: true,
//     };
//   }

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type='button' onClick={this.setState}>reverse</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
