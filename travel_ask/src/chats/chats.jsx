
import { useEffect, useState } from 'react';
import Chat from '../chat/chat';
import s from './chats.module.css';
import { chatStore } from '../const/chat';
// import { useEffect, useRef } from 'react';

function Chats() {

  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    console.log(chatStore, 'chatStore');
  }, [chatStore])



  return (
    <div className={s.chats}>

      <div className={s.chat_container} key={'admin'}>
        <h2 className={s.title}>Чат с пользователем</h2>
        <Chat isClient={isClient} />
      </div>

      {/* тут вставить разделительную полосу */}

      <div className={s.chat_container} key={'client'}>
        <h2 className={s.title}>Чат с администратором</h2>
        <Chat isClient={!isClient} />
      </div>


    </div>
  );
}

export default Chats;
