import './styles.scss';
import useHeader from "../../hooks/useHeader";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import Button from '../CustomButton';
import MenuLink from './MenuLink';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = [
        { page: "Home", link: "/" },
        { page: "About", link: "#" },
        { page: "Contact", link: "#" },
        { page: "Blog", link: "#" },
        { page: "Careers", link: "#" },
    ];
    const { logo, width, displayMenu, toggleMenu, showButton } = useHeader();

    return (
        <header className="container-header">
            <div className="box-menu">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                {
                    displayMenu === "flex"
                        ? <IoCloseOutline className="icon-menu" onClick={toggleMenu} />
                        : <IoMenuOutline className="icon-menu" onClick={toggleMenu} />
                }
                <nav className="box-nav" style={{ display: `${displayMenu}` }}>
                    {
                        menuItems.map((item, index) =>
                            <MenuLink
                                link={item.link}
                                key={index}
                                event={width < 778 ? toggleMenu : undefined}
                            >
                                {item.page}
                            </MenuLink>)
                    }
                </nav>
                {
                    showButton && <Button event={undefined}>Request Invite</Button>
                }
            </div>
        </header >
    )
}
export default Header;
