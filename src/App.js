import './tailwind.css';
import  Headers  from "./components/Headers";
import  Home from "./components/Home";
import  AboutMe from "./components/AboutMe";
import  Services  from "./components/Services";
import  Works  from "./components/Works";
import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";

function App() {
  return (
    <div className='bg-slate-600'>
     <Headers/>
     <Home/>
     <AboutMe/>
     <Services/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
