import s from './photosComposition.module.css';

function PhotosComposition({photo, index, photos, max_view_photos, handleOpenPhoto}) {

  return (
    <div className={s.photo} key={index} onClick={handleOpenPhoto}>
       {photo && <img className={s.image} src={photo}/>}
       {console.log(photos.length, 'array')}
       {console.log(index, 'index')}
       {max_view_photos === index + 1 && (photos.length - max_view_photos) > 0 ? (
          <span className={s.span_plus}>+{(photos.length - max_view_photos) > 0 ? (photos.length - max_view_photos) : null}</span>
       ) : null}
    </div>
  );
}

export default PhotosComposition;
