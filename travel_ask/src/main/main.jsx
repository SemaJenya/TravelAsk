import s from './main.module.css';
import barselona from '../images/Barselona.svg'

function Main() {
  return (
    <div className={s.main}>
      <div className={s.image__container}>
        <img className={s.image}  src={barselona} alt='barselona'/>
      </div>
      <div className={s.text}>
        <h2 className={s.title}>Барселона — обзор города</h2>
        <p className={s.subtitle}>Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
          многочисленными фестивалями и гастрономическим разнообразием понравилась
          мне&nbsp;в первый же день пребывания и стала местом,&nbsp;в котором...</p>
        <a className={s.link} href='https://ru.wikipedia.org/wiki/Барселона'>Читать дальше</a>
      </div>
    </div>
  );
}

export default Main;
