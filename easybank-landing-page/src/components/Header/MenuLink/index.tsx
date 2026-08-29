import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';


interface IMenuLinkProps {
    children: ReactNode,
    link: string,
    event: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

const MenuLink = ({ children, link, event }: IMenuLinkProps) => {
    const location = useLocation();
    return (
        <Link
        onClick={event}
            className={`menu-link ${location.pathname === link ? "active" : ""}`}
            to={link}>
            {children}
        </Link>
    )
}
export default MenuLink;
