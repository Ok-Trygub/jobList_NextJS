import {useState} from 'react';
// @ts-ignore
import StarRatings from 'react-star-ratings';


const StarRating = ({size = '10px'}) => {
    const [rating, setRating] = useState(0);


    const changeRating = (newRating:number) => {
        setRating(newRating);
    }

    return (
        <StarRatings
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
