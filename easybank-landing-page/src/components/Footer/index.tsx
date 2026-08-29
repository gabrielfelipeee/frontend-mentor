import './styles.scss';
import { FaFacebookSquare, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logoWhite from '../../assets/logo-white.svg';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';
const Footer = () => {
    return (
        <footer className="container-footer">
            <div className="box">
                <div className="box-social-mideas">
                    <img src={logoWhite} alt="avatar easybank" />
                    <div className="social-mideas">
                        <Link to="#">
                            <FaFacebookSquare className="icon" />
                        </Link>
                        <Link to="#">
                            < FaYoutube className="icon" />
                        </Link>
                        <Link to="#">
                            <FaXTwitter className="icon" />
                        </Link>
                        <Link to="#">
                            <FaPinterest className="icon" />
                        </Link>
                        <Link to="#">
                            <FaInstagram className="icon" />
                        </Link>
                    </div>
                </div>

                <ul className="box-info">
                    <li>
                        <Link to="#">About Us</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
                    </li>
                    <li>
                        <Link to="#">Careers</Link>
                    </li>
                    <li>
                        <Link to="#">Support</Link>
                    </li>
                    <li>
                        <Link to="#">Privacy Policy</Link>
                    </li>
                </ul>


                <div className="box-rights">
                    <CustomButton event={undefined}>Request Invite</CustomButton>
                    <p>&copy; Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
