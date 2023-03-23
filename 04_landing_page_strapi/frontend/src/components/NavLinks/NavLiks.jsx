import * as Styled from './NavLiksStyled';
import MenuLink from '../MenuLink/MenuLink';

const NavLinks = ({ links = [] }) => {
    return (
        <Styled.Container aria-label="Main menu">
            {links.map((link) => (
                <MenuLink key={link.link} {...link} />
            ))}
        </Styled.Container>
    );
};

export default NavLinks;
