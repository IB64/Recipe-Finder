import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="fullscreen">
      <Navbar />
      <main>
        <Filters />
        <Recipes />
      </main>
    </div>
  );
}

export default App;
