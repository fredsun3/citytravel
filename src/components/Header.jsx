import './Header.css';

function Header({ onLogoClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={onLogoClick}>
          <span className="logo-icon">🏯</span>
          <span className="logo-text">中国城市旅行攻略</span>
        </div>
        <nav className="nav">
          <span className="nav-item" onClick={onLogoClick}>首页</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
