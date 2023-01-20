import arrowDown from '../images/arrowDown.svg';

const accordionItem = () => {
    return (
        <div className="px-[33px] py-[19px] w-full flex items-center justify-between">
            <h3 className="font-bold text-[12px] leading-[12px] tracking-[0.5px] uppercase">
                Daily
            </h3>
            <img src={arrowDown} alt="open" />
        </div>    
    )
}

export default accordionItem