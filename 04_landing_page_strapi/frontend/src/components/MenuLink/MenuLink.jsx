import { Container } from "./MenuLinkStyle";

const MenuLink = ({ link, newTab, children }) => {

    const target = newTab ? '_blank' : '_self';

    return (
        <Container
            href={link}
            target={target}
        >
            {children}
        </Container>
    )
}

export default MenuLink
