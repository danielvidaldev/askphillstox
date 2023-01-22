const CarouselItem = ({image}) => {
    return (
        <a className="relative" aria-label={image.name} href="/">
            <img src={`/${image.path}`} alt={image.name} className="w-[118px] h-[180px]" />
            <h4 className="absolute text-[20px] leading-[20px] tracking-[0.5px] text-white left-1/2 transform -translate-x-1/2 bottom-[19px]">{image.name}</h4>
        </a>
    )
}

export default CarouselItem