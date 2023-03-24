import * as Styled from './GridTextStyle';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import TextComponent from '../TextComponent/TextComponent';

const GridText = ({
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
                        <Styled.GridElement
                            key={el.title}
                        >

                            <Heading
                                size="medium"
                                darkColor={!background}
                                as="h3"
                            >
                                {el.title}
                            </Heading>

                            <TextComponent>{el.description}</TextComponent>

                        </Styled.GridElement>
                    ))}

                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

export default GridText;
