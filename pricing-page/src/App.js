import react from 'react';
import './App.css';
import './css/Media.css';
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import AgentPricing from "./components/AgentPricing.jsx";
import Comparison from "./components/Comparison.jsx";

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Hero />
      <AgentPricing />
      <Comparison />
    </div>
  );
}

export default App;
