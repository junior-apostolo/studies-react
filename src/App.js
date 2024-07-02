import './App.css';
import { useState, useEffect } from 'react';
// import { Component } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Executa somente quando a dependencia mudar
  useEffect(() => {
    console.log('componentDidUpdate: somente quando a dependencia mudar');
  }, [count]);

  // Executa apenas uma vez
  // useEffect(() => {
  //   console.log('componentDidUpdate: Executa apenas uma vez');
  // }, []);

  // Executa sempre que o componente App atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate: sempre que o componente App atualiza');
  // });

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
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
