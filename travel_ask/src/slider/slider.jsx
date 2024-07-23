import { useState } from 'react';
import Card from '../card/card';
import { reviews } from '../const/const';
import ButtonSlider from './buttonSlider/buttonSlider';
import s from './slider.module.css';
import sel from 'classnames';

function Slider() {

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex === reviews.length - 1) {
      setSlideIndex(1);
    }
    else if (slideIndex !== reviews.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
    else if (slideIndex === 1) {
      setSlideIndex(reviews.length - 1);
    }
  };

  const dotClick = (index) => {
    setSlideIndex(index)
  }


  return (
    <div className={s.slider_box}>
      <div className={s.slider}>
        <div className={s.slider_container} style={ {transform: `translateX(-${(slideIndex - 1) * 300}px)` }}>
          {reviews.map((item, index) =>
            <Card item={item} key={index} />
          )}
        </div>
      </div>
      <ButtonSlider moveSlide={prevSlide} direction={'prev'} />
      <ButtonSlider moveSlide={nextSlide} direction={'next'} />
      <div className={s.dots_container}>
            {Array.from({length: reviews.length - 1}).map((dot, index) => (
              <div className={slideIndex === index + 1 ? sel(s.dot, s.active) : s.dot} onClick={() => dotClick(index + 1)}>

              </div>
            ))}
      </div>
    </div>


  );
}

export default Slider;
