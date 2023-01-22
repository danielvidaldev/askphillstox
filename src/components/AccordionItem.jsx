import { useState } from 'react';

import arrowDown from '../icons/arrowDown.svg';
import arrowUp from '../icons/arrowUp.svg';

const AccordionItem = ({item}) => {
    const [open, setOpen] = useState(false);

    const openAccordion = () => {
        setOpen(!open)
    }

    return (
        <div className="px-[33px] py-[19px] w-full flex flex-col space-y-[19px] border-b border-[#ECECEC]" draggable="true">
            <div className="flex items-center justify-between w-full cursor-pointer" onClick={openAccordion}>
                <h3 className="font-bold text-[12px] leading-[12px] tracking-[0.5px] uppercase">
                    {item.name}
                </h3>
                {!open ? <img src={arrowDown} alt="open" className="cursor-pointer" onClick={openAccordion} /> : <img src={arrowUp} alt="close" className="cursor-pointer" onClick={openAccordion} />}
            </div>
            {item.subItems.map((subItem) => {
                if (open) {
                    return <div className="flex w-full py-[2.71px] items-center justify-between" key={subItem.id}>
                        <a className="text-[10px] leading-[10px] uppercase" aria-label={subItem.name} href="/">
                            {subItem.name}
                        </a>
                        <p className="text-[#A2A2A2] text-[8px] leading-[8px]">
                            {subItem.amount} products
                        </p>
                    </div> 
                } else {
                    return []
                }
            })}

        </div>    
    )
}

export default AccordionItem