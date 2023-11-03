
import AsideComponent from '../Aside/Aside';
import HeaderComponent from '../Header/Header';
import Movies from '../Movies/Movies';
import FooterComponent from '../Footer/Footer';
import './Home.css';





export default function Home() {
 

    return (
        <main>
            <AsideComponent />
            <div>
                <HeaderComponent />
                <Movies  />
                <FooterComponent />
            </div>
        </main>
    );
}


