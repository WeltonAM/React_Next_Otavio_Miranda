import Footer from './Footer';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Footer',
    component: Footer,
    args: {
        footerHtml: `<p>Developed by <a href="https://github.com/WeltonAM">WeltonMatosDev</a></p>`,
    },
};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
};