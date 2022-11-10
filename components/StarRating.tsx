import {useState} from 'react';
import dynamic from 'next/dynamic';
// @ts-ignore
const StarRatings = dynamic(import('react-star-ratings'), {ssr: false});



const StarRating = ({size = '10px'}) => {

    const [rating, setRating] = useState<number>(0);

    const changeRating = (newRating: number): void => {
        setRating(newRating);
    }

    return (
        <StarRatings
            // @ts-ignore
            rating={rating}
            starEmptyColor='rgba(135, 141, 157, 1)'
            starRatedColor='rgba(56, 65, 93, 1)'
            starHoverColor='rgba(56, 65, 93, 1)'
            changeRating={changeRating}
            starDimension={size}
            starSpacing='0'
            name='rating'
        />
    );
};

export default StarRating;
