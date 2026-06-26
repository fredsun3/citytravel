import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>🏯 中国城市旅行攻略</span>
          <p>发现中国最美城市，探索千年文化与现代魅力</p>
        </div>
        <div className="footer-links">
          <h4>热门城市</h4>
          <p>北京 · 上海 · 西安 · 成都 · 桂林 · 杭州 · 丽江</p>
        </div>
        <div className="footer-copyright">
          <p>© 2024 China City Travel Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
