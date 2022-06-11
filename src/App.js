import './App.css'
import Experience from './components/experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      {/* <Images>why</Images> */}
    </div>
  );
}

export default App;
