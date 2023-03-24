import Heading from '../Heading/Heading';
import SectionBackground from '../SectionBackground/SectionBackground';
import TextComponent from '../TextComponent/TextComponent';
import * as Styled from './GridImageStyle';

const GridImage = ({
    title,
    description,
    grid,
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
                    size="huge"
                    upperCase
                    darkColor={!background}
                >
                    {title}
                </Heading>

                <TextComponent>{description}</TextComponent>

                <Styled.Grid>
                    {grid.map((el) => (

                        <Styled.GridElement key={`${el.srcImg}${el.altText}`}>

                            <Styled.Image src={el.srcImg} alt={el.altText} />

                        </Styled.GridElement>
                    ))}
                </Styled.Grid>

            </Styled.Container>
        </SectionBackground>
    );
};

export default GridImage;
