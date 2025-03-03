import './Navbar.css'

const Navbar = ({setactiveform}) => {
    return(
        <>
                <div className="nav-container">
                    <nav className="list-container">
                        <ul className="nav-list">
                            <li className="list-item l1" onClick={()=> setactiveform('login')}>Login</li>
                            <li className="list-item l1">Theme</li>
                        </ul>
                    </nav>
                </div>
        </>
    )
}

export default Navbar