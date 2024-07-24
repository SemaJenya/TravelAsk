import s from './message.module.css';
import chat_avatar_admin from '../images/chat_avatar.png';
import chat_avatar_client from '../images/chat_avatar_client.png';
import sel from 'classnames';
// import { test_1, test_2 } from '../const/chat';

function Message({ userObj, isClient }) {

  const day = userObj.date;
  const currentDay = new Date()


  const diffDay = currentDay.getDate() - day.getDate();
  console.log(diffDay, 'diffDay');

  let whenSent = '';

  const whichDay = () => {
    console.log('djdjjd');
    if (diffDay == 0) {
      console.log(diffDay);
      return whenSent = 'Сегодня'
    }
    else if (diffDay == 1) {
      return whenSent = 'Вчера'
    }
    else {
      let date = userObj.date.getDate() + ' ' + 'месяц';
      return whenSent = date
    }
  }
  whichDay();
  console.log(whenSent, 'whichDay');



  return (
    <div className={isClient && userObj.id == 1 ?
      s.message_container :
      !isClient && userObj.id == 1 ?
        sel(s.message_container, s.client) :
        isClient && userObj.id == 2 ?
          sel(s.message_container, s.client) :
          s.message_container}>

      <div className={s.avatar_container}>
        <img className={s.avatar} src={userObj.id == 1 ? chat_avatar_client : chat_avatar_admin} />
      </div>
      <div className={s.message_box}>
        <p className={s.message}>{userObj.message}</p>
        <p className={s.time}>{whenSent} в {userObj.date.getHours() + ':' + userObj.date.getMinutes()}</p>
      </div>

    </div>
  );
}

export default Message;
