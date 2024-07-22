import Card from '../card/card';
import s from './reviews.module.css';

function Reviews() {
  return (
    <div className={s.reviews}>
        <h2 className={s.title}>Отзывы о Барселоне</h2>
        <Card />
    </div>
  );
}

export default Reviews;
