import * as Styled from './FooterStyle';
import TextComponent from '../TextComponent/TextComponent';
import SectionContainer from '../SectionContainer/SectionContainer';

const Footer = ({ footerHtml }) => {
    return (
        <Styled.Container>
            <SectionContainer>
                <TextComponent>{footerHtml}</TextComponent>
            </SectionContainer>
        </Styled.Container>
    );
};

export default Footer;
