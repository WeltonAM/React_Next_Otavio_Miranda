import SectionContainer from '../SectionContainer/SectionContainer';
import * as Styled from './SectionBackgroundStyle';

const SectionBackground = ({
    children,
    background = false,
    sectionId = '',
}) => {
    return (
        <Styled.Container background={background} id={sectionId}>
            <SectionContainer>{children}</SectionContainer>
        </Styled.Container>
    );
};

export default SectionBackground;
