import { useState, useMemo } from 'react';
import { cities, getRegions, getCitiesByRegion, searchCities, getFootprintCities } from '../data/cities';
import { getCityImage } from '../data/cityImages';
import './HomePage.css';

const REGION_COLORS = {
  '\u534e\u5317': '#e74c3c', '\u534e\u4e1c': '#3498db', '\u897f\u5317': '#e67e22',
  '\u897f\u5357': '#2ecc71', '\u534e\u5357': '#9b59b6', '\u5168\u90e8': '#7f8c8d', '\u672c\u5730': '#f39c12',
};

function HomePage({ onCityClick }) {
  const [activeRegion, setActiveRegion] = useState('\u5168\u90e8');
  const [searchQuery, setSearchQuery] = useState('');
  const regions = getRegions();

  const footprintCities = useMemo(() => getFootprintCities(), []);
  const showFootprintModule = !searchQuery && ['\u5168\u90e8', '\u672c\u5730', '\u534e\u5357'].includes(activeRegion);

  const filteredCities = useMemo(() => {
    if (searchQuery) return searchCities(searchQuery);
    return getCitiesByRegion(activeRegion);
  }, [activeRegion, searchQuery]);

  const renderCityCard = (city, isFootprint = false) => (
    <div key={city.id} className={`city-card${isFootprint ? ' footprint-card' : ''}`} onClick={() => onCityClick(city.id)}>
      <div className="city-image" style={{ backgroundImage: `url(${city.image})` }}>
        {isFootprint ? (
          <div className="city-badge footprint-badge">👣 我的足迹</div>
        ) : (
          <div className="city-badge" style={{ background: REGION_COLORS[city.region] || '#7f8c8d' }}>
            {city.region}
          </div>
        )}
      </div>
      <div className="city-info">
        <div className="city-header">
          <h3 className="city-name">{city.name}</h3>
          <span className="city-name-en">{city.nameEn}</span>
        </div>
        <p className="city-tagline">{city.tagline}</p>
        <div className="city-meta">
          <span>📅 {city.bestSeason}</span>
          <span>💰 {city.avgBudget}</span>
        </div>
        <div className="city-highlights">
          <span>🏛 {city.attractions.length} 景点</span>
          <span>🏨 {city.hotels.length} 酒店</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">探索中国</h1>
          <p className="hero-subtitle">从千年古都到现代都市，发现每一座城市的独特魅力</p>
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="搜索城市..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">{cities.length}</span>
            <span className="stat-label">精选城市</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{cities.reduce((s, c) => s + c.attractions.length, 0)}</span>
            <span className="stat-label">推荐景点</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{cities.reduce((s, c) => s + c.hotels.length, 0)}</span>
            <span className="stat-label">精选酒店</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{footprintCities.length}</span>
            <span className="stat-label">我的足迹</span>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="filter-section">
        <div className="region-tabs">
          {regions.map(r => (
            <button
              key={r}
              className={`region-tab ${activeRegion === r ? 'active' : ''}`}
              style={activeRegion === r ? { background: REGION_COLORS[r] || '#7f8c8d', borderColor: REGION_COLORS[r] || '#7f8c8d' } : {}}
              onClick={() => { setActiveRegion(r); setSearchQuery(''); }}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      {/* 我的足迹 Module */}
      {showFootprintModule && footprintCities.length > 0 && (
        <section className="footprint-module">
          <div className="footprint-header">
            <h2 className="footprint-title">👣 我的足迹</h2>
            <p className="footprint-subtitle">我的旅行印记 · 亲身到访过的地方，记录每一段难忘的旅程</p>
          </div>
          <div className="city-grid">
            {footprintCities.map(city => renderCityCard(city, true))}
          </div>
        </section>
      )}

      {/* City Cards */}
      {filteredCities.length > 0 && (
        <section className="city-grid">
          {filteredCities.map(city => renderCityCard(city, false))}
        </section>
      )}

      {/* 本地 tab empty hint */}
      {!searchQuery && activeRegion === '\u672c\u5730' && (
        <p className="grid-empty-hint">所有足迹都在上方「我的足迹」模块中展示。</p>
      )}
    </div>
  );
}

export default HomePage;
