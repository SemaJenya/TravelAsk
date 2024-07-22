import s from './card.module.css';
import avatar from '../images/avatar.svg';
import { reviews } from '../const/const';
import PhotosComposition from '../photosComposition/photosComposition';
import like from '../images/like.svg';


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
            if (photo) {
              return (<PhotosComposition
                photo={photo}
                index={index}
                photos={reviews.user_1.photos}
                max_view_photos={max_view_photos}
                key={index} />)
            }
          })
        }
      </div>
      <div className={s.footer}>
        <p className={s.publication_date}>{reviews.user_1.date > 10 ?
                                          'около 1 года назад' : 
                                          (reviews.user_1.date < 10) && (reviews.user_1.date > 4) ?
                                           reviews.user_1.date + ' месяцев назад' :
                                           (reviews.user_1.date == 1) ?
                                           reviews.user_1.date + ' месяц назад' :
                                           reviews.user_1.date == 0 ?
                                           'недавно':
                                           reviews.user_1.date + ' месяца назад'
                                          } 
        </p>
        <div className={s.comments_container}>
          <p className={s.point}>·</p>
          <p className={s.comment_counter}>{reviews.user_1.comments > 4 ?
                                            reviews.user_1.comments + ' комментариев' :
                                            reviews.user_1.comments == 1 ? 
                                            reviews.user_1.comments + ' комментарий' :
                                            reviews.user_1.comments == 0 ?
                                            'комментариев нет':
                                            reviews.user_1.comments + ' комментария'}
            </p>
        </div>       
        <div className={s.likes_container}>
          <img className={s.like} src={like} alt='like' />
          <p className={s.likes_counter}>{reviews.user_1.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
