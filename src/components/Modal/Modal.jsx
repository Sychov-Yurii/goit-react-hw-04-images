import React, { useState, useEffect, useCallback } from 'react';
import css from './Modal.module.css';

const Modal = ({ imageURL: propsImageURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const handleImageClick = imageURL => {
    setIsOpen(true);
    setImageURL(imageURL);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleEscKey = useCallback(event => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, handleEscKey]);

  return (
    <div>
      {isOpen && (
        <div
          className={`${css.overlay} ${css.showOverlay}`}
          onClick={handleCloseModal}
        >
          <div className={css.modal}>
            <button className={css.close} onClick={handleCloseModal}>
              &times;
            </button>
            <img
              src={largeImageURL || imageURL}
              alt="large"
              className={css.modalImage}
            />
          </div>
        </div>
      )}
      <li className="gallery-item">
        <img
          src={propsImageURL}
          alt="gallery"
          className="gallery-image"
          onClick={() => handleImageClick(propsImageURL)}
        />
      </li>
    </div>
  );
};

export default Modal;
