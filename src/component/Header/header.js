function App() {
  return (
    <div className="header">
      <header className="App-header">
        <div className="header">
          <nav className="nav" id="nav">
            <div className="nav-center">
              <div className="nav-header">
                <img src={jake} className="jake" alt="logo" />
                <button className="nav-btn btn" id="nav-btn">
                  menu
                  <a href="#index.html">user</a>
                </button>
              </div>
              <ul class="nav-links">
                <li>
                  <a href="#index.html">user</a>
                </li>

                <li>
                  <a href="#about.html">dashbord</a>
                </li>
                <li>
                  <a href="#products.html">delivery</a>
                </li>
                <li>
                  <a href="#contact.html">about us</a>
                </li>
                <select className="nav-btn btn" id="nav-btn">
                  menu
                  <a href="#index.html">user</a>
                </select>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <body className="l-page">
        <section className="Hero  section">
          <article className="hero-header">
            <h3>
              <span>JAKE</span>PLUG
            </h3>
          </article>
          <div className="hero-text">
            <article>
              <img
                src={require("../Asset/img-1.jpg")}
                className="img"
                alt="logo"
              />

              <p>
                welcome to Jakeplug. your one-stop shop for all your online
                shopping needs! We're here to make your shopping experience
                easy, enjoyable, and convenient. Discover an incredible range of
                products, from fashion and electronics to home decor and more,
                all at your fingertips. At Jakeplug, we prioritize your
                satisfaction.
              </p>
            </article>
            <article>
              <img
                src={require("../Asset/img-3.jpg")}
                className="img"
                alt="logo"
              />
              <p>
                Our secure payment options and reliable shipping guarantee a
                seamless transaction, with your purchases arriving promptly at
                your doorstep. Should you have any questions or concerns, our
                dedicated support team is here to assist you every step of the
                way.
              </p>
            </article>
            <article>
              <img
                src={require("../Asset/img-2.jpg")}
                className="img"
                alt="logo"
              />
              <p>
                Join our growing community of happy customers and redefine the
                way you shop online. Start exploring our vast selection today
                and unlock a world of possibilities. Welcome to Jakeplug, where
                convenience meets quality.
              </p>
            </article>
          </div>
          <button className="hero-btn btn">start</button>
        </section>
        <footer className="footer section-center ">ghg</footer>
      </body>
    </div>
  );
}
