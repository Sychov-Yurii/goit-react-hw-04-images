import React, { useState, useEffect } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../Api/Api';
import ModalImage from '../Modal/Modal';
import Loader from '../Loader/Loader';
import css from './ImageGallery.module.css';

const ImageGallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setResult(0);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        const { hits, totalHits } = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...hits]);
        setResult(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const pushButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader>...Loading</Loader>}
      {error && <p>...Error {error}</p>}
      {query !== '' && images.length === 0 && <p>...No photo {error}</p>}
      <ul className={css.imageGallery}>
        {images.map(image => (
          <ModalImage
            key={image.id}
            imageURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ul>
      {result > images.length && (
        <button className={css.btn_loader} onClick={pushButton}>
          Load more
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
