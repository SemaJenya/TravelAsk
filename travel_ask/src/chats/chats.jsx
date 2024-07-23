import { useState } from 'react';
import Chat from '../chat/chat';
import s from './chats.module.css';

function Chats() {

const [isClient, setIsClient] = useState(true);



  return (
    <div className={s.chats}>

      <div className={s.chat_container} key={'admin'}>
        <h2 className={s.title}>Чат с пользователем</h2>
        <Chat isClient={isClient}/>
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
