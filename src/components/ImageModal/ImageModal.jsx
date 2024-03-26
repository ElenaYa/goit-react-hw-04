import Modal from 'react-modal';
import css from './ImageModal.module.css'

import { FaRegUser } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

const ImageModal = ({ value: { imgRegular, description, likes, name },
    modalIsOpen,
    onCloseModal, }) => {
    
    Modal.setAppElement("#root");

    return (
        <div className={css.modalWindow}>
        <Modal
            isOpen={modalIsOpen}
            isClose={onCloseModal}
            className={css.modal}
        >
            <img src={imgRegular} alt={description} onClick={onCloseModal} />

        <div className={css.container}> 
        <div className={css.info}>
          <FaRegUser className={css.icon}/>
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.info}>
          <BiLike  className={css.icon}/>
          <p className={css.text}>{likes}</p>
        </div>
      </div>
            
        </Modal>
</div>
    );

};
export default ImageModal;