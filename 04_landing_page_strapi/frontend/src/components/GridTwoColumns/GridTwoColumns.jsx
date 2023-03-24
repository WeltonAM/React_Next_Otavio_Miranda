import * as Styled from './GridTwoColumnsStyle';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import TextComponent from '../TextComponent/TextComponent';

const GridTwoColumns = ({
    title,
    text,
    imgSrc,
    background = false,
    sectionId = '',
}) => {
    return (
        <SectionBackground
            background={background}
            sectionId={sectionId}
        >
            <Styled.Container background={background}>
                <Styled.TextContainer>
                    <Heading
                        upperCase
                        darkColor={!background} size="huge"
                    >
                        {title}
                    </Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.TextContainer>
                <Styled.ImageContainer>
                    <Styled.Image src={imgSrc} alt={title} />
                </Styled.ImageContainer>
            </Styled.Container>
        </SectionBackground>
    );
};

export default GridTwoColumns;
