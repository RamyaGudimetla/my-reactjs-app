import React from "react";

function Footer() {
  return (
    <footer className="bg-danger text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          <strong>© 2024 BookShelf</strong> — All rights reserved.
        </p>
        <div>
         
          <a href="https://facebook.com"  className="text-white me-3">
            <i className="bi bi-facebook">facebook</i>
          </a>
          <a href="https://twitter.com"  className="text-white me-3">
            <i className="bi bi-twitter">Twitter</i>
          </a>
          <a href="https://instagram.com" className="text-white">
            <i className="bi bi-instagram">instagram</i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;