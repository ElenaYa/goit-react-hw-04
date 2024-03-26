import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import fetchImages  from './gallery-api';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        
        if (data.total_pages === 0) {
          return toast.error("No results!");
        }

        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
        toast.error("Error! Please reload the page");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchQuery]);

  const handleSearch =  (newQuery) => { 
   
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (value) => {
    setContent(value);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar query={searchQuery} onSearch={handleSearch} />

      {isLoading && <Loader />}
     
      {error && <ErrorMessage />}

      {images.length > 0 &&
        <ImageGallery items={images} onOpenModal={openModal} />
      }
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      
      {content && (
        <ImageModal
        value={content}
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModal}
      />
)}
      
      <Toaster position="top-center" />
    </div>
  );
}


