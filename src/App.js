import logo from './logo.svg';
import './App.css';
import ContactoComponent from './componentes/pure/contacto';

function App() {
  const defaultContacto = {nombre: 'Jeysson', apellido: 'Seclen Meoño', email:'jseclenmeono@gmail.com', conectado: true};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoComponent contacto={defaultContacto}></ContactoComponent>
      </header>
    </div>
  );
}

export default App;
