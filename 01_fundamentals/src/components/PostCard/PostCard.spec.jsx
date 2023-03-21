/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const post = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...post} />);
    
        expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', { title: 'title 1 1' })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
      });
    
      it('should match snapshot', () => {
        const { container } = render(<PostCard {...post} />);
        expect(container.firstChild).toMatchSnapshot();
      });
});