import { FaRegUser } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import css from './ImageCard.module.css';

const ImageCard = ({ item: { 
    description,
    urls,
    likes,
    user: {name},
}, onOpenModal, }) => {

    return (
        <div className={css.card}>
            <img className={css.image}
                onClick={() => onOpenModal({
                    imgRegular: urls.regular,
                    description,
                    likes,
                    name,
                })
                }
                src={urls.small}
                alt={description}
            />
            <div className={css.container}>
                <div className={css.info}>
                    <FaRegUser className={css.icon} />
                    <p>{name}</p>
                </div>
                <div>
                    <BiLike className={css.icon} />
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    );
};
export default ImageCard;