import TextComponent from './TextComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (children) => {
    return (
        <div>
            <TextComponent {...children} />
        </div>
    );
};