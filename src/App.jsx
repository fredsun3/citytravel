import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CityDetailPage from './components/CityDetailPage';
import './App.css';

function App() {
  const [currentCity, setCurrentCity] = useState(null);

  return (
    <div className="app">
      <Header onLogoClick={() => setCurrentCity(null)} />
      <main className="main-content">
        {currentCity ? (
          <CityDetailPage cityId={currentCity} onBack={() => setCurrentCity(null)} />
        ) : (
          <HomePage onCityClick={(id) => setCurrentCity(id)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
