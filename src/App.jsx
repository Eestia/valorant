import './App.css'
import Nav from './components/nav/nav';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';
import Carousel from './components/carousel/carousel';
import Info from './components/info/info';
function App() {
  return (
    <div className="pp">
      <Nav/>
      <Cards/>
      <Carousel/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App
