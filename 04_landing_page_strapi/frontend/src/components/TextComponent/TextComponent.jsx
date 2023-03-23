import { Container } from './TextComponentStyle';

const TextComponent = ({ children }) => {
  return (
    <Container dangerouslySetInnerHTML={{ __html: children }} />
  )
}

export default TextComponent
