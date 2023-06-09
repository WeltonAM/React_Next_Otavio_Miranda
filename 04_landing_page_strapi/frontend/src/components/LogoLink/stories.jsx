import LogoLink from './LogoLink';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        imgSrc: 'assets/images/logo.svg',
        link: 'http://localhost',
    },
};

export const ImageOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

export const TextOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

TextOnly.args = {
    imgSrc: '',
};