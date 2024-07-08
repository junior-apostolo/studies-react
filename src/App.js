import './App.css';
import { useState, useCallback } from 'react';
import P from 'prop-types';
// import { Component } from 'react';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

// O componente Pai sempre sera renderizado quando o estado mudar
function App() {
  const [count, setCount] = useState(0);

  // useCallback() => utilizado para memoizar(cachear) uma função entre novas renderizações
  // que é passada para um componente filho.

  // Para que essa função não atualize é utilizado uma função de callback para o estado
  // assim temos acesso ao valor anterior e atual do estado. Consequentemente fazendo com que
  // a função não dependa de count, e assim impedindo que seja atualizada sempre que o estado for alterado.
  const incrementCounter = useCallback((num) => {
    setCount((c) => c + num);
  }, []);

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div>
  );
}

export default App;
