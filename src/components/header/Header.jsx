import logoImage from './../../img/icons/logo.svg'
import './header.css'

export const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImage} alt="Logo" />
                        <span>Fashion</span>
                    </div>
                    <div className="header__nav">
                        <nav>
                            <ul>
                                <li><a href="#">CATALOGUE</a></li>
                                <li><a href="#">FASHION</a></li>
                                <li><a href="#">FAVOURITE</a></li>
                                <li><a href="#">LIFESTYLE</a></li>
                                <li><a href="#" className="header__nav-btn">SIGN UP</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}