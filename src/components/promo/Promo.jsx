import promoImage from './../../img/images/header-img.jpg';
import './promo.css';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className='highlight'>
                                <span>LET’S</span>
                            </span>
                            EXPLORE
                            <span className='highlight highlight__yellow'>
                                <span>UNIQUE</span>
                            </span>
                            CLOTHES.
                        </div>
                        <div className="promo__desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo_btn_wrapper">
                            <a href="#" className="promo_btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="promo__image"><img src={promoImage} alt="promo" /></div>
                </div>
            </div>
        </section>
    );
}

export default Promo;