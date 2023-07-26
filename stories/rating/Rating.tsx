import React from 'react';
import 'material-icons/iconfont/material-icons.css';

export interface RatingProps {
    rating: number;
    maxRating: number;
    color: string;
    size: number;
    spacing: number;
    direction: 'row' | 'column';
    onSetRating: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
    rating,
    maxRating,
    color,
    size,
    spacing,
    direction,
    onSetRating
}) => {
    const [hoverRating, setHoverRating] = React.useState<number | undefined>(undefined);
    const [ratingState, setRatingState] = React.useState<number>(rating);
    const stars = Array.from({ length: maxRating }, (_, index) => index + 1);
    const starStyle = {
        cursor: 'pointer',
        fontSize: size,
        margin: spacing,
    };
    const starClassName = 'material-icons-round';

    const handleClick = (rating: number) => {
        setHoverRating(rating);
        setRatingState(rating);
        onSetRating(rating);
    };

    return (
        <div style={{ display: 'flex', flexDirection: direction }}>
            {stars.map((star) => {
                const isFilled = (hoverRating || ratingState) ? star <= (hoverRating || ratingState) : star <= ratingState;
                const starColor = isFilled ? color : 'grey';
                return (
                    <span
                        key={star}
                        style={{ ...starStyle, color: starColor }}
                        className={starClassName}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(undefined)}
                        onClick={() => handleClick(star)}
                    >
                        star
                    </span>
                );
            }
            )}
        </div>
    );
};