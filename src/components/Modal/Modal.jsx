// import css from './Modal.module.css';
// import React, { Component } from 'react';

// class Modal extends Component {
//   state = {
//     isOpen: false,
//     imageURL: '',
//   };

//   handleImageClick = imageURL => {
//     this.setState({ isOpen: true, imageURL });
//     document.addEventListener('keydown', this.handleEscKey);
//   };

//   handleCloseModal = () => {
//     this.setState({ isOpen: false });
//     document.removeEventListener('keydown', this.handleEscKey);
//   };

//   handleEscKey = event => {
//     if (event.key === 'Escape') {
//       this.handleCloseModal();
//     }
//   };

//   render() {
//     const { isOpen, imageURL } = this.state;
//     const { largeImageURL } = this.props;

//     return (
//       <div>
//         {isOpen && (
//           <div
//             className={`${css.overlay} ${css.showOverlay}`}
//             onClick={this.handleCloseModal}
//           >
//             <div className={css.modal}>
//               <button className={css.close} onClick={this.handleCloseModal}>
//                 &times;
//               </button>
//               <img
//                 src={largeImageURL || imageURL}
//                 alt="large"
//                 className={css.modalImage}
//               />
//             </div>
//           </div>
//         )}
//         <li className="gallery-item">
//           <img
//             src={this.props.imageURL}
//             alt="gallery"
//             className="gallery-image"
//             onClick={() => this.handleImageClick(this.props.imageURL)}
//           />
//         </li>
//       </div>
//     );
//   }
// }

// export default Modal;

import React, { useState, useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ imageURL: propsImageURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const handleImageClick = imageURL => {
    setIsOpen(true);
    setImageURL(imageURL);
    document.addEventListener('keydown', handleEscKey);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.removeEventListener('keydown', handleEscKey);
  };

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

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
