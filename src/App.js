import './App.css';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import Imagen from './components/imagen';


function App() {
  return (
    <div className="App">
      <Header />
      <Imagen />
      <Login/>
      <Footer />
 
    </div>
  );
}

export default App;
