import './Aside.css';
function Aside() {
    return (
        <aside className="container">
            <div className='cont-title'>
                <h3 className="title">Filter</h3>
            </div>
            <div className='cont-buttons'>
                <button className='btn'>Docs</button>
                <button className='btn'>Music</button>
                <button className='btn'>Animation</button>
                <button className='btn'>Drama</button>
                <button className='btn'>Sci-fy</button>
                <button className='btn'>History</button>
            </div>
            <div className='cont-sort'>
                <h3 className="title">Sort by</h3>
            </div>
            <div className='cont-buttons2'>
                <button className='btn'>Title A-Z</button>
                <button className='btn'>Title A-Z</button>
                <button className='btn'>Popularity</button>
            </div>
            <div className='cont-search'>
                <h3 className="title">Search</h3>
            </div>
            <div className='cont-buttons3'>
                <span>
                    <input placeholder='Search here'></input>
                    <button className='btn-go'>Go</button>
                </span>
            </div>
            <div className='cont-footer'>
                <p>Developed by Marianne Teixidó</p>
            </div>
        </aside>
    );
}

export default Aside;
//discover-gender  numero pasar como string
