import Header from './components/Header';
import Carousel from './components/Carousel';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

function App() {
    console.log('render')
    return (
        <div className="h-screen w-screen flex justify-center">
            <div className="flex flex-col items-start grow max-w-[375px] bg-[#F5F5F5]">
                <Header />
                <Carousel />
                <Accordion />
                <Footer />
            </div>
        </div>
    );
}

export default App;
