import { Children, cloneElement } from "react";

const s = {
  style: {
    fontSize: '60px',
  },
};

const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s })
    return newChild;
  })
}

const Clone = () => {
  return (
    <Parent>
      <p>Hello</p>
    </Parent>
  )
}

export default Clone