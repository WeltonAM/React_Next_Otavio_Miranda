import React from "react"

import { Title } from "./HeadingStyle"

const Heading = ({ children, darkColor = true, as = 'h1', size = 'medium', upperCase = false }) => {
    return (
        <Title
            darkColor={darkColor}
            as={as}
            size={size}
            upperCase={upperCase}
        >
            {children}
        </Title>
    )
}

export default Heading