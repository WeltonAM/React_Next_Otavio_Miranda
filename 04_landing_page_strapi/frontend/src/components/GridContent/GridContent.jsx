import Heading from '../Heading/Heading';
import SectionBackground from '../SectionBackground/SectionBackground';
import TextComponent from '../TextComponent/TextComponent';
import * as Styled from './GridContentStyle';

const GridContent = ({
    title,
    html,
    background = false,
    sectionId = '',
}) => {

    return (
        <SectionBackground
            background={background}
            sectionId={sectionId}
        >
            <Styled.Container>
                <Heading
                    upperCase
                    darkColor={!background} size="huge"
                >
                    {title}
                </Heading>
                <Styled.Html>
                    <TextComponent>{html}</TextComponent>
                </Styled.Html>
            </Styled.Container>
        </SectionBackground>
    );
};

export default GridContent;
