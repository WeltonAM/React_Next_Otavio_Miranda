import * as Styled from './styles';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import GoTop from '../../components/GoTop/GoTop';

const Base = ({ links, logoData, footerHtml, children }) => {
    return (
        <>
            <Menu
                links={links}
                logoData={logoData}
            />

            <Styled.Container>
                {children}
                <Footer footerHtml={footerHtml} />
            </Styled.Container>

            <GoTop />
        </>
    );
};

export default Base;
