import React from "react"
import Heading from "./Heading";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Anything',
    },
};

export const Template = (args) => <Heading {...args} />