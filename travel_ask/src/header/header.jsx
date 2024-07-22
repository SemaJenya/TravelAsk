import s from './header.module.css';

function Header() {
  return (
    <div className={s.header}>
        <p className={s.title}>Тестовое задание</p>
    </div>
  );
}

export default Header;
