import { createPortal } from 'react-dom';
import s from './modal.module.css';
import ModalOverlay from '../modal_overlay/modal_overlay';
import { useEffect } from 'react';



const modalDot = document.querySelector('#modalDot')

function Modal( { onClose, imageClick } ) {

  useEffect(() => {
    const closeModalEsc = (e) => {
        if (e.key === 'Escape') {
            onClose()            
        }         
    }
    document.addEventListener('keydown', closeModalEsc)

    return () => document.removeEventListener('keydown', closeModalEsc)
}, [])


  return (
    createPortal(
      <>
          <div className={s.modal}>
              <div className={s.image_box}>                
                  <button className={s.close} type='button' onClick={onClose}>X</button>
                  <img className={s.image} src={imageClick}/>
              </div>                   
          </div>
          <ModalOverlay onClick={onClose} />
      </>, 
      modalDot)
  );
}

export default Modal;
