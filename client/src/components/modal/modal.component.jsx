import React from 'react';
import './modal.styles.scss';

const Modal = ({ show, children, toggleModal }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} onClick={toggleModal}>
      <div className='modal-main'>{children}</div>
    </div>
  );
};

export default Modal;
