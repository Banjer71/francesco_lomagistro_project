import React, { useEffect, useRef } from "react";
import LogoBook from "../../images/book_cover_p.jpg";

import "./book.css";

const Book = () => {
  const imageRef = useRef(null);

  const handleScroll = () => {
    const flip = document.querySelector(".hero-flip");
    const image = document.querySelector(".image");
    const rect = imageRef.current.getBoundingClientRect();

    let bodyClass = "section4";

    if (window.innerWidth > 960 && image) {
      if (
        rect.top - window.innerHeight === 0 &&
        rect.top - window.innerHeight > -259
      ) {
        bodyClass = "section4";
        flip.innerText = "Book";
        flip.style.color = "#f9c943";
      } else if (rect.top - window.innerHeight < -260) {
        bodyClass = "section5";
        flip.innerText = "Berardi\n Jazz\n Connection";
        flip.style.color = "#f9c943";
      } else {
        bodyClass = "section4";
        flip.innerText = "Book";
        flip.style.color = "#f9c943";
      }
    }
    document.body.className = bodyClass;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="info" id="book">
      <h1 className="pro" id="book" ref={imageRef}>
        Il Tamburo
      </h1>
      <img src={LogoBook} alt="copertina libro" />
      <p
        className="info-text"
        style={{ fontSize: "15px", padding: "30px", textAlign: "center" }}
      >
        <a
          href="https://www.dantonemusic.com/product-page/francesco-lomagistro-il-tamburo"
          target="_blank"
          rel="noreferrer"
        >
          Acquista il libro
        </a>
      </p>
    </div>
  );
};

export default Book;
