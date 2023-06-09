import Menu from './Menu';

import linksMock from '../NavLinks/mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Menu',
    component: Menu,
    args: {
        links: linksMock,
        logoData: {
            text: 'Logo',
            link: '#target',
            imgSrc: '',
        },
    },
};

export const Template = (args) => {
    return (
        <div style={{ height: '300vh', background: 'gray' }}>
            <Menu {...args} />
        </div>
    );
};