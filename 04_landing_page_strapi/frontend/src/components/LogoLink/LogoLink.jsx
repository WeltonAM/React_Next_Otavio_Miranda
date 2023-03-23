import * as Styled from './LogoLinkStyle';
import Heading from '../Heading/Heading';
// import { Link } from 'react-router-dom';

const LogoLink = ({ text, srcImg = '', link }) => {
    return (
        <Heading size="small" upperCase>
            <Styled.Container href={link}>
                {!!srcImg && <img src={srcImg} alt={text} />}
                {!srcImg && text}
            </Styled.Container>
        </Heading>
    );
};

export default LogoLink;
