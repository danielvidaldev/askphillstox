import Carousel from 'nuka-carousel';

import CarouselItem from "./CarouselItem";

const CarouselContainer = () => {
    const images = [
        {
            id: 1,
            path: 'images/running.png',
            name: 'Running'
        },
        {
            id: 2,
            path: 'images/tenis.png',
            name: 'Tenis'
        },
        {
            id: 3,
            path: 'images/fitness.png',
            name: 'Fitness'
        }
    ]

    return (
        <Carousel withoutControls={true} slidesToShow={images.length - 0.1} cellSpacing={12} className="pl-[13px] overflow-hidden py-[30px] min-h-[241px]">
            {images.map((image) => {
                return <CarouselItem key={image.id} image={image} />
            })}
        </Carousel>
    );
}

export default CarouselContainer;