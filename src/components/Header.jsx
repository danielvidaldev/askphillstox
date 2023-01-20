import burgerMenu from '../images/burgerMenu.svg';
import stocksLogo from '../images/stocksLogo.svg';
import shoppingBag from '../images/shoppingBag.svg';

const Header = () => {

    return (
        <div className="flex px-[13px] py-[20px] justify-between items-center w-full border-b border-b-[#ECECEC]">
            <div class="flex space-x-[13px]">
                <img src={burgerMenu} alt="Menu" />
                <img src={stocksLogo} alt="Stocks Logo" />
            </div>
            <div className="relative">
                <img src={shoppingBag} alt="Shopping Bag" />
                {/* Not copying the svg with the number assuming this number would be dynamic */}
                <span className="absolute top-[9px] right-[4.5px] text-[10px] leading-[10px] tracking-[0.5px]">0</span>
            </div>
        </div>
    )
};

export default Header;