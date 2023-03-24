import * as Styled from './LogoLinkStyle';
import Heading from '../Heading/Heading';
// import { Link } from 'react-router-dom';

const LogoLink = ({ text, imgSrc = '', link }) => {
    return (
        <Heading size="small" upperCase>
            <Styled.Container href={link}>
                {!!imgSrc && <img src={imgSrc} alt={text} />}
                {!imgSrc && text}
            </Styled.Container>
        </Heading>
    );
};

export default LogoLink;
