function App() {
    return <div id="container">Meu App</div>;
  }
  // É transformado em:
  function App() {
    return React.createElement('div', { id: 'container' }, 'Meu App');
  }
  

  // Function Component
const Button = () => {
    return <button>Comprar</button>;
  };
  
  // Class Component
  class Button extends React.Component {
    render() {
      return <button>Comprar</button>;
    }
  }
  
  // RE-USE COMPONENTS
  const Button = () => {
    return <button>Comprar</button>;
  };
  
  const MainNav = () => {
    return (
      <nav>
        <a href="#">Link 1</a>
        <Button />
      </nav>
    );
  };
  
  const App = () => {
    return (
      <div>
        <MainNav />
        <Button />
      </div>
    );
  };
  

  //EVENTS
  const Produtos = () => {
    function handleClick(event) {
      alert('Comprou: ' + event.target.innerText);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Camisa</button>
        <button onClick={handleClick}>Bermuda</button>
      </div>
    );
  };
  
  //HOOKS
  const Compras = () => {
    // useState é um Hook que define uma variável reativa
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Comprar: {count}</button>
        <p>Total: {count}</p>
        <p>Preço: R$ {count * 250}</p>
      </div>
    );
  };
  