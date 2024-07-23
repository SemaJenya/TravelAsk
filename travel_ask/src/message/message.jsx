import s from './message.module.css';
import chat_avatar_admin from '../images/chat_avatar.png';
import chat_avatar_client from '../images/chat_avatar_client.png';
import sel from 'classnames';
// import { test_1, test_2 } from '../const/chat';

function Message({ userObj, isClient }) {

  function diffDay (dateFrom, dateTo)  {
    console.log(dateTo.getDate() - dateFrom.getDate() );
    return dateTo.getDate() - dateFrom.getDate() 
  }


  const currentDay = new Date()

//дату разобраться 

  // const whichDay = () => {
  //   console.log('djdjjd');
  //   if(diffDay(userObj.date.getDate(), currentDay.getDate()) == 1) {
  //     console.log(diffDay(userObj.date.getDate(), currentDay.getDate()));
  //     return 'Сегодня'
  //   }
  //   else if (diffDay(userObj.date.getDate(), currentDay.getDate()) == 2) {
  //     return 'Вчера'
  //   }
  //   else {
  //     let date = userObj.date.getDate() + ' ' + 'месяц';
  //     return date
  //   }
  // }


  return (
    <div className={isClient && userObj.id == 1 ?
      s.message_container :
      !isClient && userObj.id == 1 ?
        sel(s.message_container, s.client) :
        isClient && userObj.id == 2 ?
          sel(s.message_container, s.client) :
          s.message_container}>

      <div className={s.avatar_container}>
        <img className={s.avatar} src={userObj.id == 1 ? chat_avatar_admin : chat_avatar_client} />
      </div>
      <div className={s.message_box}>
        <p className={s.message}>{userObj.message}</p>
        <p className={s.time}>Сегодня в {userObj.date.getHours() + ':' + userObj.date.getMinutes()}</p>
      </div>

    </div>
  );
}

export default Message;
