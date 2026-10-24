import './App.css'
import ProductTab from './ProductTab'

function App() {
  return (
    <div className="storefront">
      <div className="announcement-bar">
        <span className="announcement-dot" aria-hidden="true" />
        Curated everyday tech · Thoughtful upgrades, made simple
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nexa home">
          <span className="brand-mark" aria-hidden="true">n</span>
          <span>NEXA<span className="brand-period">.</span></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#deals">Today’s deals</a>
          <a href="#products">Shop tech</a>
        </nav>
        <a className="header-link" href="#products">Explore collection <span aria-hidden="true">↗</span></a>
      </header>

      <main id="home">
        <section className="hero" id="deals" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> THE EVERYDAY TECH EDIT</p>
            <h1 id="hero-title">Good tech.<br /><span>Better days.</span></h1>
            <p className="hero-description">Discover useful upgrades for your desk, your devices, and everything in between.</p>
            <a className="hero-cta" href="#products">Shop the deals <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-spark spark-one">✳</div>
            <div className="hero-spark spark-two">✳</div>
            <div className="hero-disc"><span>GOOD<br />CHOICE</span></div>
            <div className="hero-note">A little upgrade<br />goes a long way.</div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CURATED FOR YOU</p>
              <h2 id="products-title">Blockbuster deals<span className="heading-period">.</span></h2>
            </div>
            <p className="section-note">Sample catalog · Prices shown for display only</p>
          </div>
          <ProductTab />
        </section>

        <section className="service-strip" aria-label="Shopping benefits">
          <div><span className="service-icon" aria-hidden="true">✦</span><span><strong>Picked with care</strong><small>Useful tech, no clutter</small></span></div>
          <div><span className="service-icon" aria-hidden="true">↗</span><span><strong>Everyday value</strong><small>Clear pricing, simple browsing</small></span></div>
          <div><span className="service-icon" aria-hidden="true">♡</span><span><strong>Made for real life</strong><small>Thoughtful upgrades for every day</small></span></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">n</span><span>NEXA<span className="brand-period">.</span></span></a><span>Good things for your everyday.</span><span>© {new Date().getFullYear()} NEXA</span></footer>
    </div>
  )
}

export default App
