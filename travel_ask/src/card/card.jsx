import s from './card.module.css';
import avatar from '../images/avatar.svg';
import { reviews } from '../const/const';
import PhotosComposition from '../photosComposition/photosComposition';


function Card() {

  const max_view_photos = 4;
  const photoToShow = reviews.user_1.photos.slice(0, max_view_photos)

  return (
    <div className={s.card}>
      <div className={s.user}>
        <img className={s.image} src={avatar} alt='avatar' />
        <p className={s.name}>{reviews.user_1.name}</p>
      </div>
      <p className={s.titile}><p className={s.city}>Барселона</p>— о городе:</p>
      <p className={s.comment}>{reviews.user_1.comment}</p>
      <div className={s.photos}>
        {
          photoToShow.map((photo, index) => {
            let xIndex = max_view_photos - index;
            if (photo) {
              return (<PhotosComposition
                photo={photo}
                index={index}
                photos={reviews.user_1.photos}
                max_view_photos={max_view_photos}
                xIndex={xIndex}
                // right={right}
                key={index} />)
            }
          })
        }

      </div>
    </div>
  );
}

export default Card;
