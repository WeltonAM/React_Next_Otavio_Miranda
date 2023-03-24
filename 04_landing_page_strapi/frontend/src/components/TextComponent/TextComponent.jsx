import * as Styled from './TextComponentStyle';

const TextComponent = ({ children }) => {
  return (
    <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />
  )
}

export default TextComponent
