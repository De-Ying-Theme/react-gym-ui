import './App.css';
import { Hero, Join, Plans, Programs, Reasons, Testimonials, Footer } from './components'

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
