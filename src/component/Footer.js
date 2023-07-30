import React from "react";

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
