
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home() {
    return (
        <main>
            <Aside />
            <div>
                <Header />
                {/* <Movies /> */}
                <Footer />
            </div>
        </main>
    );
}


