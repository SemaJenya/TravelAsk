
import Chats from '../chats/chats';
import Header from '../header/header';
import Main from '../main/main';
import Reviews from '../reviews/reviews';
import s from './app.module.css';

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Main />
      <Reviews />
      <Chats/>
      
    </div>
  );
}

export default App;
