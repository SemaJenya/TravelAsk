import s from './chat.module.css';
import chat_avatar_admin from '../images/chat_avatar.png';
import chat_avatar_client from '../images/chat_avatar_client.png';
import flagsvg from '../images/flagsvg.svg';
import starY from '../images/StarY.svg';
import starE from '../images/StarE.svg';
import sel from 'classnames';
import telegramm from '../images/telegramm.svg';
import Message from '../message/message';
import { chatStore } from '../const/chat';
import { useEffect, useRef, useState } from 'react';



function Chat({ isClient }) {


  const [inputValue, setInputValue] = useState('');
  const [dataUser, setDataUser] = useState(null);


  const handleSubmitMessage = (e) => {
    e.preventDefault();

    if (isClient) {
      setDataUser({
        id: 1,
        date: new Date(),
        message: inputValue,
      })

    }
    else {
      setDataUser({
        id: 2,
        date: new Date(),
        message: inputValue,
      })
    }
  }

 
  const messageRef = useRef();
  useEffect(() => {
    const messageNode = messageRef.current;
      if (messageNode) {
        messageNode.scrollTop = messageNode.scrollHeight;
      }

      if (dataUser) {
        console.log(dataUser, 'abc')
        chatStore.push(dataUser);
        setDataUser(null);
      }
    
  }, [ messageRef, handleSubmitMessage, chatStore, dataUser ]);

  return (
    <div className={s.chat}>

      <div className={s.header}>
        <div className={s.info}>
          <img className={s.header_avatar} src={isClient ? chat_avatar_admin : chat_avatar_client} alt='avatar' />
          <div className={s.name_container}>
            <p className={s.name}>{!isClient ? 'Администратор' : 'Наталия Полянская'}</p>
            <p className={s.description}>
              <img className={s.flag} src={flagsvg} alt='flag' />
              {!isClient ? 'TravelAsk' : 'Гид по Баварии, фотограф'}
            </p>
          </div>
        </div>

        <div className={isClient ? s.stars : sel(s.stars, s.stars_invisible)}>
          <img className={s.star} src={starY} alt='star' />
          <img className={s.star} src={starY} alt='star' />
          <img className={s.star} src={starY} alt='star' />
          <img className={s.star} src={starY} alt='star' />
          <img className={s.star} src={starE} alt='star' />
        </div>
      </div>

      {/* это поле отображения сообщений */}
      <div className={s.chat_field} ref={messageRef}>
        {chatStore.map((userObj, index) => (
          <Message userObj={userObj} isClient={isClient} key={index} />
        ))}
        
      </div>


      <form className={s.form}>
        <img className={s.form_avatar} src={isClient ? chat_avatar_client : chat_avatar_admin} />
        <div className={s.input_container}>
          <input 
            className={s.input} 
            type='text' 
            placeholder='Напишите сообщение...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onSubmit={(e) => setInputValue('')}
            >
            
          </input>
          <button className={s.submit_button} type='submit' onClick={handleSubmitMessage}>
            <img className={s.submit_image} src={telegramm} alt='submit' />
          </button>
        </div>

      </form>

    </div>
  );
}

export default Chat;
