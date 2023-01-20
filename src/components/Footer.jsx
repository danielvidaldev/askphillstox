import arrowDown from '../images/arrowDown.svg';

const Footer = () => {
    const links = [
        {
            name: 'Review',
            url: '#'
        },
        {
            name: 'Contact',
            url: '#'
        },
        {
            name: 'Account',
            url: '#'
        },
    ] 

    return (
        <div className="flex flex-col w-full px-[30px] py-[60px] space-y-[15px]">
            <div className="flex space-x-[18px]">
                {links.map((link) => {
                    return <a className="text-[12px] leading-[12px] tracking-[0.5px] uppercase" href={link.url} key={link.name}>{link.name}</a>;
                })}
            </div>
            <div className="flex items-center">
                {/* I assume this dropdown is not included in the assignment */}
                <p className="text-[12px] leading-[12px] tracking-[0.5px] uppercase "><span className="font-bold">Language</span> : en &euro;</p> 
                <img src={arrowDown} alt="open" className="ml-[10px]"/>
            </div>
            <div className="flex flex-col">
                <p className="text-[12px] leading-[18px] tracking-[0.5px]">
                    Call 020-2050738 <br />
                    Mon - Thu, 9:00 - 19:00 <br />
                    Fri, 9:00 - 18:00
                </p>
            </div>
            <p className="text-[12px] leading-[12px] tracking-[0.5px]">
                <span className="font-bold">mail</span> onshallo@aceandtate.nl
            </p>
            <p className="text-[12px] leading-[12px] tracking-[0.5px]">
                <span className="font-bold">whatsapp</span> +31 6 33236677
            </p>
        </div>
    )
};

export default Footer;