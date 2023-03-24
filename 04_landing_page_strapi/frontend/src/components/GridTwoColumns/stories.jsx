import GridTwoColumns from './GridTwoColumns';

import mock from './mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'GridTwoColumns',
    component: GridTwoColumns,
    args: mock,
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <GridTwoColumns {...args} />
        </div>
    );
};