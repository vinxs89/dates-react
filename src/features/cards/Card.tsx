import { useState } from "react";
import './Card.css';

export interface CardUser {
    id: string,
    images: string[]
}

interface CardProps {
    user: CardUser
}

export const Card = ({user} : CardProps) => {
    const [currentImageIndex, updateCurrentImageIndex] = useState(0);

    const handleClickNextImage = () => {
        if (currentImageIndex + 1 < user.images.length) {
            updateCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handleClickPrevImage = () => {
        if (currentImageIndex - 1 >= 0) {
            updateCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const currentImage = user.images[currentImageIndex];

    return (
        <section className="card">
            <div className="card__image-wrapper" style={{ backgroundImage: `url(${currentImage})` }}></div>
            <div className="card__buttons">
                <button onClick={handleClickPrevImage}>Prev</button>
                <button onClick={handleClickNextImage}>Next</button>
            </div>
        </section>
    );
}