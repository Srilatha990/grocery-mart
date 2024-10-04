
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Hero from './components/hero';
import Details from './components/details';
import Category from './components/category';
import Banners from './components/banners';
import Vegetables from './components/vegetables';
import Deal from './components/deal';
import Newarrivals from './components/newarrivals';
import Bestbanner from './components/bestbanner'; 
import Footer from './components/footer';
import MobileHeader from './components/mobileheader';


function App() {
  return (
    <div className="App">
      <MobileHeader/>
      <Navbar/>
      <Header/>
      <Hero/>
      <Details/>
      <Category/>
      <Banners/>
      <Vegetables/>
      <Deal/>
      <Newarrivals/>
      <Bestbanner/>
      <Footer/>
      
    </div>
  );
}

export default App;
