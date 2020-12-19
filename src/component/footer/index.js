import React,{useState,useEffect} from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { GALLERY } from '../../shared/gallery'


function Footer(){
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        setGallery(GALLERY)
        return () => {
            console.log('state updated')
        }
    }, [0])
    const images = gallery.map(image => {
        return(
            <div className='col-4 d-none d-md-block px-2 my-2 footer-images'>
                <img className="img-fluid" src={image.image} alt={image.title} />
            </div>
        );
    });
    return(
        <footer className="footer-site row-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-3 d-none d-md-block footer-about offset-1 text-left">
                        <h3 className="mb-3">About</h3>
                        <p>If you need to get high quality cosmetics at affordable prices, Cosology is the right place for you! Here you can
                             find wide assortment of world famous brands and find what you need. Our mission is to deliver every woman a
                             piece of beauty to make her happy and to highlight her beauty and personal individuality by means of cosmetics.</p>
                    </div>
                    <div className="col-12 col-sm-2 d-none d-md-block text-left">
                        <h3>Links</h3>
                        <ul className="links-list">
                            <li><NavLink className="footer-links" to="/home">Home</NavLink></li>
                            <li><NavLink className="footer-links" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="footer-links" to="/help">Shop</NavLink></li>
                            <li><NavLink className="footer-links" to="/info">About Us</NavLink></li>
                            <li><NavLink className="footer-links" to="/contactus">contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-3 d-none d-md-block text-left">
                        <h3>Gallery</h3>
                        <div className="row">
                            {images}
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 text-left d-none d-md-block">
                        <h3>Social Media</h3>
                        <ul className="social-list">
                            <li><a className="btn btn-social btn-instagram" href="https://www.instagram.com"><i className="fa fa-instagram"></i> </a></li>
                            <li><a className="btn btn-social btn facebook" href="https://www.facebook.com"><i className="fa fa-facebook"></i> </a></li>
                            <li><a className="btn btn-social btn-google" href="https://www.google.com"><i className="fa fa-google"></i> </a></li>
                            <li><a className="btn btn-social btn-twitter" href="https://www.twitter"><i className="fa fa-twitter"></i> </a></li>
                        </ul>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 text-center">
                        <h1 className="footer-logo mb-3">Cosology cosmetics</h1>
                        <p className="text-light"> for any inquiers contact us at inquiers@cosology.com or call 551-111-1111</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


