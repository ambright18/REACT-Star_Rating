import { useState } from 'react';
import '../Star_Rating/StarRating.css';
import {FaStar} from 'react-icons/fa';

const StarRating = ({numOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)

    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = (getCurrentIndex) => {
        setHover(rating)
    }

    return(
        <div className='starRating'>
            {
                [...Array(numOfStars)].map((_, index)=> {
                    index += 1

                    return <FaStar
                    key= {index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    />
                    
                })
            }
        </div>
    );
}

export default StarRating