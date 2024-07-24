
import { useEffect, useState } from 'react';
import Chat from '../chat/chat';
import s from './chats.module.css';
import { chatStore } from '../const/chat';
// import { useEffect, useRef } from 'react';

function Chats() {

  const [isClient, setIsClient] = useState(true);
  const [isValueChanged, setIsValueChanged] = useState(false);


  useEffect(() => {
    console.log(isValueChanged, 'isValueChanged');
  }, [isValueChanged])



  return (
    <div className={s.chats}>

      <div className={s.chat_container} key={'admin'}>
        <h2 className={s.title}>Чат с пользователем</h2>
        <Chat isClient={isClient} onValueChanged={setIsValueChanged}/>
      </div>

      <div className={s.grey_line}></div>

      <div className={s.chat_container} key={'client'}>
        <h2 className={s.title}>Чат с администратором</h2>
        <Chat isClient={!isClient}  onValueChanged={setIsValueChanged}/>
      </div>


    </div>
  );
}

export default Chats;
