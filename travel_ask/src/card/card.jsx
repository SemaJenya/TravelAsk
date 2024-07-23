import s from './card.module.css';
import avatar from '../images/avatar.svg';
import PhotosComposition from '../photosComposition/photosComposition';
import like from '../images/like.svg';
import { useState } from 'react';
import Modal from '../modal/modal';


function Card({ item }) {

  const max_view_photos = 4;
  const photoToShow = item.photos.slice(0, max_view_photos);


  const [isClick, setIsClick] = useState(false);
  const [imageClick, setIsImageClick] = useState();

  const handleOpenPhoto = (e) => {
    setIsClick(!isClick);
    const image = e.target.src;
    setIsImageClick(image)
  }


  const onClose = () => {
    setIsClick(!isClick);
  }


  return (
    <div className={s.card}>
      <div className={s.user}>
        <img className={s.image} src={avatar} alt='avatar' />
        <p className={s.name}>{item.name}</p>
      </div>
      <p className={s.titile}><p className={s.city}>Барселона</p>— о городе:</p>
      <p className={s.comment}>{item.comment}</p>
      <div className={s.photos}>
        {
          photoToShow.map((photo, index) => {
            if (photo) {
              return (<PhotosComposition
                photo={photo}
                handleOpenPhoto={handleOpenPhoto}
                index={index}
                photos={item.photos}
                max_view_photos={max_view_photos}
                key={index} />)
            }
          })
        }
      </div>

      {isClick && (<Modal imageClick={imageClick} onClose={onClose} />)}


      <div className={s.footer}>
        <p className={s.publication_date}>{item.date > 10 ?
          'около 1 года назад' :
          (item.date < 10) && (item.date > 4) ?
            item.date + ' месяцев назад' :
            (item.date == 1) ?
              item.date + ' месяц назад' :
              item.date == 0 ?
                'недавно' :
                item.date + ' месяца назад'
        }
        </p>
        <div className={s.comments_container}>
          <p className={s.point}>·</p>
          <p className={s.comment_counter}>{item.comments > 4 ?
            item.comments + ' комментариев' :
            item.comments == 1 ?
              item.comments + ' комментарий' :
              item.comments == 0 ?
                'комментариев нет' :
                item.comments + ' комментария'}
          </p>
        </div>
        <div className={s.likes_container}>
          <img className={s.like} src={like} alt='like' />
          <p className={s.likes_counter}>{item.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
