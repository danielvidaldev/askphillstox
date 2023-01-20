import AccordionItem from "./AccordionItem";

const Accordion = () => {

    return (
        <div class="w-full flex flex-col">
            <AccordionItem />
            <div className="px-[33px] py-[19px] flex w-full items-center justify-between">
                <h4 className="text-[10px] leading-[10px] uppercase">
                    Sport socks
                </h4>
                <p className="text-[#A2A2A2] text-[8px] leading-[8px]">
                    25 products
                </p>
            </div>
        </div>
    )
};

export default Accordion;