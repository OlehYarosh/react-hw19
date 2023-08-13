import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navigation">
        <Link to='/'>Home</Link>  
        <Link to='/post'>Fellowship of Tweets</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/contact'>Contacts</Link>
        </nav>
    )
}

export default Header;