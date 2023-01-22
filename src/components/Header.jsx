import burgerMenu from '../icons/burgerMenu.svg';
import stocksLogo from '../icons/stocksLogo.svg';
import shoppingBag from '../icons/shoppingBag.svg';
import close from '../icons/close.svg';

const Header = ({menuHandler, openedHeader}) => {

    return (
        <div className="flex px-[13px] py-[20px] justify-between items-center w-full border-b border-b-[#ECECEC]">
            <div className="flex space-x-[13px]">
                {/* the close logo was not provided so I had to improvise */}
                {!openedHeader ? <img src={burgerMenu} alt="Menu" className="cursor-pointer h-[20px] w-[18px]" onClick={menuHandler} /> : <img src={close} alt="Close menu" className="cursor-pointer h-[20px] w-[18px]" onClick={menuHandler} />}
                <img src={stocksLogo} alt="Stocks Logo" />
            </div>
            <div className="relative">
                <img src={shoppingBag} alt="Shopping Bag" className="cursor-pointer" />
                {/* Not copying the svg with the number assuming this number would be dynamic */}
                <span className="absolute top-[9px] right-[4.5px] text-[10px] leading-[10px] tracking-[0.5px]">0</span>
            </div>
        </div>
    )
};

export default Header;