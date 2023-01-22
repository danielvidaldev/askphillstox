import { useState, Fragment } from 'react';

import Header from './components/Header';
import CarouselContainer from './components/Carousel';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

function App() {
    const [open, setOpenMenu] = useState(false);

    const openMenu = () => {
        setOpenMenu(!open)
    }

    return (
        <div className="h-screen w-screen flex justify-center">
            <div className="flex flex-col items-start grow max-w-[375px] bg-[#F5F5F5]">
                <Header menuHandler={openMenu} openedHeader={open} />
                {open ?
                    <Fragment>
                        <CarouselContainer />
                        <div className="overflow-y-auto grow flex flex-col w-full">
                            <Accordion />
                            <Footer />
                        </div>
                    </Fragment> : ''}
            </div>
        </div>
    );
}

export default App;
