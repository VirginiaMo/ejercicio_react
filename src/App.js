import './App.css';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Imagen from './components/imagen/Imagen';


function App() {
  return (
    <div className="App">
      <Header />
      <Imagen />
      <Login />
      <Footer />
 
    </div>
  );
}

export default App;
