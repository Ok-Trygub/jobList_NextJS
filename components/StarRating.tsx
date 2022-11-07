import {useState} from 'react';
import ReactStars from 'react-stars'
import StarRatings from 'react-star-ratings';



const StarRating = ({size = 10}) => {
    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
    }

    return (
        <ReactStars
            value={rating}
            count={5}
            size={size}
            color1='rgba(135, 141, 157, 1)'
            color2='rgba(56, 65, 93, 1)'
        />
    );
};



// Второй вариант:

// import {useState} from 'react';
// import StarRatings from 'react-star-ratings';
//
//
// const StarRating = ({size = '10px'}) => {
//     const [rating, setRating] = useState();
//
//     const changeRating = (newRating) => {
//         setRating(newRating);
//     }
//
//     return (
//         <StarRatings
//             rating={rating}
//             starEmptyColor='rgba(135, 141, 157, 1)'
//             starRatedColor='rgba(56, 65, 93, 1)'
//             starHoverColor='rgba(56, 65, 93, 1)'
//             changeRating={changeRating}
//             starDimension={size}
//             starSpacing='0'
//             name='rating'
//         />
//     );
// };
//
// export default StarRating;

export default StarRating;




