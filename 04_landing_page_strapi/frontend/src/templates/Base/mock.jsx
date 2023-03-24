import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';

import GridText from '../../components/GridText/GridText';

const mockBase = {
    children: (
        <>
            <GridText {...gridMock} background />
            <GridText {...gridMock} />
            <GridText {...gridMock} background />
            <GridText {...gridMock} />
            <GridText {...gridMock} background />
            <GridText {...gridMock} />
        </>
    ),

    links: linksMock,

    logoData: {
        text: 'Logo',
        link: '#',
    },

    footerHtml: '<p>Footer test</p>',
};

export default mockBase;