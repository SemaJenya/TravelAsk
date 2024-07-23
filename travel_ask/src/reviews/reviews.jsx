// import Card from '../card/card';
import s from './reviews.module.css';
// import { reviews } from '../const/const'
import Slider from '../slider/slider';

function Reviews() {
  return (
    <div className={s.reviews}>
      <h2 className={s.title}>Отзывы о Барселоне</h2>
      <Slider />
      <button className={s.button_all}>Все отзывы</button>

    </div>
  );
}

export default Reviews;
