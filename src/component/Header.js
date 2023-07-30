import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
      <div>
        
      </div>
      <nav>
        <ul className="nav-links text-3xl font-bold">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
