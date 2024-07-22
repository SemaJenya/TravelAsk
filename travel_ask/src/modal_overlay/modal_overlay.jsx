import s from './modal_overlay.module.css';

function ModalOverlay( {onClick} ) {
  return (
    <div className={s.overlay} onClick={onClick}>
        
    </div>
  );
}

export default ModalOverlay;
