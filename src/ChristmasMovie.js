import { useState } from "react";
import { dataMovies } from "./dataMovies";
import leftArrow from './assets/icon/leftArrow.png';
import rightArrow from './assets/icon/rightArrow.png';


function ChristmasMovie() { 
  

    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
      setSlide((slide) => {
        slide--;
        if (slide < 0) {
          slide = dataMovies.length - 1;
        }
        return slide;
      });
    };

    const nextSlide = () => {
      setSlide((slide) => {
        slide++;
        if (slide > dataMovies.length - 1) {
          slide = 0;
        }
        return slide;
      });
    };

    const moveDot = (index) => {
      setSlide(index);
  };
  
  return (
    <div className="ChristmasMovies-container">
      <div className="ChristmasMovies-main">
        {dataMovies.map((object, index) => {
          const { image, title, discription } = object;
          return (
            <div key={index}>
              <div
                className={
                  slide === index ? "active-anim" : "ChristmasMovies-main-cont "
                }
              >
                <div className="ChristmasMovies-left-cont">
                  <img
                    className="ChristmasMovies-poster "
                    src={image}
                    alt="poster"
                  />
                </div>
                <div className="ChristmasMovies-right-cont">
                  <h2 className="ChristmasMovies-header">{title}</h2>
                  <p className="ChristmasMovies-par">{discription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ChristmasMovies-arrow-container">
        <button
          className="ChristmasMovies-arrowBtn arrow-leftBtn"
          onClick={prevSlide}
        >
          <img src={leftArrow} alt="arrowLeft" />
        </button>
        <div className="ChristmasMovies-dot-container">
          {dataMovies.map((obj, index) => {
            const { dotPic } = obj;
            return (
              <div key={index}>
                <img
                  src={dotPic}
                  alt="dot"
                  onClick={() => moveDot(index)}
                  className={`${
                    slide === index
                      ? "ChristmasMovies-dotActive"
                      : "ChristmasMovies-dot"
                  }`}
                />
              </div>
            );
          })}
        </div>
        <button
          className="ChristmasMovies-arrowBtn arrow-rightBtn"
          onClick={nextSlide}
        >
          <img src={rightArrow} alt="arrowRight" />
        </button>
      </div>
    </div>
  );

}

export default ChristmasMovie;