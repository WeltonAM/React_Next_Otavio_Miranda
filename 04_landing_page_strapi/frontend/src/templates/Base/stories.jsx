import Base from './index';

import mockBase from './mock';
// import GridText from '../../components/GridText/GridText';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'BaseTemplate',
    component: Base,
    args: mockBase,
};

export const Template = (args) => {
    return (
        <div>
            <Base {...args} />
        </div>
    );
};