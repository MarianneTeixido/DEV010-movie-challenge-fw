
import AsideComponent from '../Aside/Aside';
import HeaderComponent from '../Header/Header';
import Movies from '../Movies/Movies';
// import Pagination from '../Pagination/Pagination';
import './Home.css';





export default function Home() {
 

    return (
        <main>
            <AsideComponent />
            <div>
                <HeaderComponent />
                <Movies  />
                {/* <Pagination /> */}
            </div>
        </main>
    );
}


