import './App.css';
import Footer from './component/Footer';
import Home1 from './component/Home1';
import Home2 from './component/Home2';
import Home3 from './component/Home3';
import Home4 from './component/Home4';
import Home5 from './component/Home5';
import Home6 from './component/Home6';
import Navbar from './component/Navbar';
import Topbar from './component/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      <Home5/>
      <Home6/>
      <Footer/>
    </div>
  );
}

export default App;
