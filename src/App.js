import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar/Navbar';
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ItemsListContainer bienvenida = "Bienvenido a Car-shops !!!"/>       
  
    </div>
  );
}

export default App;
