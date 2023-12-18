import css from './Modal.module.css';
import React, { Component } from 'react';

class Modal extends Component {
  state = {
    isOpen: false,
    imageURL: '',
  };

  handleImageClick = imageURL => {
    this.setState({ isOpen: true, imageURL });
    document.addEventListener('keydown', this.handleEscKey);
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
    document.removeEventListener('keydown', this.handleEscKey);
  };

  handleEscKey = event => {
    if (event.key === 'Escape') {
      this.handleCloseModal();
    }
  };

  render() {
    const { isOpen, imageURL } = this.state;
    const { largeImageURL } = this.props;

    return (
      <div>
        {isOpen && (
          <div
            className={`${css.overlay} ${css.showOverlay}`}
            onClick={this.handleCloseModal}
          >
            <div className={css.modal}>
              <button className={css.close} onClick={this.handleCloseModal}>
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
            src={this.props.imageURL}
            alt="gallery"
            className="gallery-image"
            onClick={() => this.handleImageClick(this.props.imageURL)}
          />
        </li>
      </div>
    );
  }
}

export default Modal;
