import { useState } from 'react';
import { getCityById } from '../data/cities';
import { getCityImage } from '../data/cityImages';
import './CityDetailPage.css';

const TYPE_ICONS = {
  '\u5386\u53f2\u53e4\u8ff9': '🏛',
  '\u57ce\u5e02\u666f\u89c2': '🌆',
  '\u81ea\u7136\u98ce\u5149': '🏔',
  '\u6587\u5316\u827a\u672f': '🎨',
  '\u6587\u5316\u4f11\u95f2': '☕',
  '\u8d2d\u7269\u7f8e\u98df': '🍜',
  '\u81ea\u7136\u751f\u6001': '🐼',
};

function CityDetailPage({ cityId, onBack }) {
  const city = getCityById(cityId);
  const [activeTab, setActiveTab] = useState('attractions');

  if (!city) return <div className="not-found">城市未找到 <button onClick={onBack}>返回</button></div>;

  return (
    <div className="city-detail">
      {/* Back button */}
      <button className="back-btn" onClick={onBack}>← 返回首页</button>

      {/* City Hero */}
      <div className="detail-hero" style={{ backgroundImage: `url(${city.image})` }}>
        <div className="detail-hero-overlay">
          <h1 className="detail-city-name">{city.name}</h1>
          <p className="detail-city-name-en">{city.nameEn}</p>
          <p className="detail-tagline">{city.tagline}</p>
          {city.isFootprint && <span className="footprint-flag">👣 我的足迹 · 亲身到访</span>}
        </div>
      </div>

      {/* City Overview */}
      <div className="detail-overview">
        <div className="overview-card">
          <span className="overview-icon">📅</span>
          <span className="overview-label">最佳季节</span>
          <span className="overview-value">{city.bestSeason}</span>
        </div>
        <div className="overview-card">
          <span className="overview-icon">💰</span>
          <span className="overview-label">日均预算</span>
          <span className="overview-value">{city.avgBudget}</span>
        </div>
        <div className="overview-card">
          <span className="overview-icon">📍</span>
          <span className="overview-label">所属区域</span>
          <span className="overview-value">{city.region}</span>
        </div>
      </div>

      {/* Description */}
      <div className="detail-description">
        <p>{city.description}</p>
      </div>

      {/* Tabs */}
      <div className="detail-tabs">
        <button className={`tab-btn ${activeTab === 'attractions' ? 'active' : ''}`} onClick={() => setActiveTab('attractions')}>
          🏛 景点 ({city.attractions.length})
        </button>
        <button className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => setActiveTab('hotels')}>
          🏨 酒店 ({city.hotels.length})
        </button>
        <button className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`} onClick={() => setActiveTab('tips')}>
          💡 攻略 ({city.tips.length})
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'attractions' && (
          <div className="attractions-list">
            {city.attractions.map((a, i) => (
              <div key={i} className="attraction-card">
                <div className="attraction-header">
                  <span className="attraction-icon">{TYPE_ICONS[a.type] || '📍'}</span>
                  <div>
                    <h3 className="attraction-name">{a.name}</h3>
                    <span className="attraction-name-en">{a.nameEn}</span>
                  </div>
                  <div className="attraction-rating">⭐ {a.rating}</div>
                </div>
                {a.tagline && <p className="attraction-tagline">📍 {a.tagline}</p>}
                {a.image && (
                  <div className="attraction-image" style={{ backgroundImage: `url(${a.image})` }}></div>
                )}
                <p className="attraction-desc">{a.description}</p>
                <div className="attraction-meta">
                  <span className="meta-tag">🎫 {a.price}</span>
                  <span className="meta-tag">⏱ {a.duration}</span>
                  <span className="meta-tag type-tag">{a.type}</span>
                </div>
                {a.highlights && a.highlights.length > 0 && (
                  <div className="attraction-highlights">
                    <strong>✨ 游玩亮点</strong>
                    <ul>
                      {a.highlights.map((h, hi) => (
                        <li key={hi}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {a.gallery && a.gallery.length > 0 && (
                  <div className="attraction-gallery">
                    {a.gallery.map((g, gi) => (
                      <div key={gi} className="gallery-item">
                        <div className="gallery-image" style={{ backgroundImage: `url(${g.image})` }}>
                          <span className="gallery-caption-tag">{g.title}</span>
                        </div>
                        <h4 className="gallery-title">{g.title}</h4>
                        <p className="gallery-content">{g.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                {a.tips && (
                  <div className="attraction-tips">
                    <strong>💡 Tips：</strong>{a.tips}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="hotels-list">
            {city.hotels.map((h, i) => (
              <div key={i} className={`hotel-card${h.isScenic ? ' scenic-hotel-card' : ''}`}>
                <div className="hotel-header">
                  <div>
                    <h3 className="hotel-name">{h.name}</h3>
                    <span className="hotel-name-en">{h.nameEn}</span>
                    {h.isScenic && <span className="scenic-badge">🏨 酒店即景区</span>}
                  </div>
                  <div className="hotel-stars">
                    {'⭐'.repeat(h.stars)}
                  </div>
                </div>
                <p className="hotel-desc">{h.description}</p>
                <div className="hotel-meta">
                  <span className="meta-tag">💰 {h.priceRange}</span>
                  <span className="meta-tag">📍 {h.location}</span>
                </div>
                <div className="hotel-features">
                  {h.features.map((f, fi) => (
                    <span key={fi} className="feature-tag">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="tips-list">
            {city.tips.map((t, i) => (
              <div key={i} className="tip-card">
                <h3 className="tip-title">📌 {t.title}</h3>
                <p className="tip-content">{t.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CityDetailPage;
