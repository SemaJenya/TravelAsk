import s from './chat.module.css';
import chat_avatar_admin from '../images/chat_avatar.png';
import chat_avatar_client from '../images/chat_avatar_client.png';
import flagsvg from '../images/flagsvg.svg';
import starY from '../images/StarY.svg';
import starE from '../images/StarE.svg';
import sel from'classnames';

function Chat({ isClient }) {



  return (
    <div className={s.chat}>

      <div className={s.header}>
        <div className={s.info}>
          <img className={s.header_avatar} src={!isClient ? chat_avatar_client : chat_avatar_admin} alt='avatar' />
          <div className={s.name_container}>
            <p className={s.name}>{ !isClient ? 'Администратор'  : 'Наталия Полянская'}</p>
            <p className={s.description}>
              <img className={s.flag} src={flagsvg} alt='flag'/>
              {!isClient ? 'TravelAsk' : 'Гид по Баварии, фотограф'}
            </p>
          </div>
        </div>

        <div className={isClient ? s.stars : sel(s.stars, s.stars_invisible)}>
          <img className={s.star} src={starY} alt='star'/>
          <img className={s.star} src={starY} alt='star'/>
          <img className={s.star} src={starY} alt='star'/>
          <img className={s.star} src={starY} alt='star'/>
          <img className={s.star} src={starE} alt='star'/>
        </div>
      </div>

      {/* это поле отображения сообщений */}
      <div className={s.chat_field}>
      </div>

      <form>
        <img />
        <input type='text'></input>
        <button type='submit'>
          <img />
        </button>
      </form>

    </div>
  );
}

export default Chat;
