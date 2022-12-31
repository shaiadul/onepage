
import './App.css';
import Card from './Pages/Card/Card';
import Footer from './Pages/Footer/Footer';
import Schedule from './Pages/Schedule/Schedule';
import Social from './Pages/Social/Social';
import Navbar from './Pages/Topnav/Navbar';

function App() {
  return (
    <div>
     
     <Navbar/>
     <Schedule/>
     <Social/>
     <Card/>
     <Footer/>

    </div>
  );
}

export default App;
