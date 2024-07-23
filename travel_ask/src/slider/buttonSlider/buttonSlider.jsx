import s from './buttonSlider.module.css';
import sliderButton_left from '../../images/Slider-Left-arrow.svg';
import sliderButton_rigth from '../../images/Slider-Right-arrow.svg';



function ButtonSlider({ moveSlide, direction }) {
  return (
    <button className={direction === 'prev' ?
     s.button_slider_left :
     s.button_slider_right
     } onClick={moveSlide}>
      <img className={s.button_image} src={direction === 'prev'? 
      sliderButton_left :
      sliderButton_rigth
      } alt='button' />
    </button>

  );
}

export default ButtonSlider;
