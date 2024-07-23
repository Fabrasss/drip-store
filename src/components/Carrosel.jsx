import React, { useEffect, useRef, useState } from "react";
import "./Carrosel.css";
import tenisCarrosel from "/White-Sneakers-PNG-Clipart1.png";
export default function Carrosel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const currentSlide = (index) => {
    showSlide(index);
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(${-currentIndex * 100}%)`;
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble, idx) => {
        bubble.classList.toggle("active", idx === currentIndex);
      });
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="carousel">
        <div className="carousel-inner" ref={slidesRef}>
          {[...Array(totalSlides)].map((_, idx) => (
            <div className="carousel-item" key={idx}>
              <div className="hero">
                <div className="grid-1">
                  <div className="text-hero">
                    <p>Melhores ofertas personalizadas</p>
                  </div>
                  <div className="title-hero">
                    <h1>Queima de estoque Nike 🔥</h1>
                  </div>
                  <div className="paragraph-hero">
                    <p>
                      Consequat culpa exercitation mollit nisi excepteur do do
                      tempor laboris eiusmod irure consectetur.
                    </p>
                  </div>
                  <div className="button-hero">
                    <button className="offer-button">Ver ofertas</button>
                  </div>
                </div>
                <div className="grid-2">
                  <img src={tenisCarrosel} alt="Tenis Carrosel" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-bubbles">
          {[...Array(totalSlides)].map((_, idx) => (
            <span
              className={`bubble ${idx === currentIndex ? "active" : ""}`}
              onClick={() => currentSlide(idx)}
              key={idx}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
