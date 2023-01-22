import AccordionItem from "./AccordionItem";

const Accordion = () => {
    const items = [
        {
            id: 1,
            name: 'Daily',
            subItems: [
                {
                    id: 1,
                    name: 'Daily item 1',
                    amount: 48,
                },
                {
                    id: 2,
                    name: 'Daily item 2',
                    amount: 15,
                },
                {
                    id: 3,
                    name: 'Daily item 3',
                    amount: 56,
                },
            ]
        },
        {
            id: 2,
            name: 'Sports',
            subItems: [
                {
                    id: 1,
                    name: 'Sport socks',
                    amount: 25,
                },
                {
                    id: 2,
                    name: 'Running socks',
                    amount: 25,
                },
                {
                    id: 3,
                    name: 'Ski socks',
                    amount: 25,
                },
                {
                    id: 4,
                    name: 'Flight socks',
                    amount: 25,
                },
                {
                    id: 5,
                    name: 'Hiking socks',
                    amount: 25,
                },
                {
                    id: 6,
                    name: 'Work socks',
                    amount: 25,
                },
            ]
        },
        {
            id: 3,
            name: 'Travel',
            subItems: [
                {
                    id: 1,
                    name: 'Travel item 1',
                    amount: 48,
                },
                {
                    id: 2,
                    name: 'Travel item 2',
                    amount: 15,
                },
                {
                    id: 3,
                    name: 'Travel item 3',
                    amount: 56,
                },
            ]
        },
        {
            id: 4,
            name: 'Medical',
            subItems: [
                {
                    id: 1,
                    name: 'Medical item 1',
                    amount: 98,
                },
                {
                    id: 2,
                    name: 'Medical item 2',
                    amount: 15,
                },
                {
                    id: 3,
                    name: 'Medical item 3',
                    amount: 12,
                },
                {
                    id: 4,
                    name: 'Medical item 4',
                    amount: 21,
                },
            ]
        },
        {
            id: 5,
            name: 'More',
            subItems: [
                {
                    id: 1,
                    name: 'More item 1',
                    amount: 48,
                },
                {
                    id: 2,
                    name: 'More item 2',
                    amount: 15,
                },
                {
                    id: 3,
                    name: 'More item 3',
                    amount: 56,
                },
            ]
        },

    ]

    return (
        <div className="w-full flex grow flex-col border-t border-[#ECECEC]">
            {items.map((item) => {
                return <AccordionItem key={item.id} item={item} />
            })}
        </div>
    )
};

export default Accordion;