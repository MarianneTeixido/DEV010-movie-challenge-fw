
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import './Home.css';

export default function Home() {
    return (
        <main>
            <Aside />
            <div className='header'>
                <Header />
            </div>
        
        </main>
    );
}


