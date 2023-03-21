import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { HomeHooks } from './HomeHooks';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'title 1',
        body: 'body 1'
      }
    ]));
  })
];

const server = setupServer(...handlers);
describe('<HomeHooks />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  })

  it('should render search, post and load more', async () => {
    render(<HomeHooks />);
    const noMorePosts = screen.getByText('Post not found');

    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Search...');
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', 'title 1');
    expect(images).toHaveLength(1);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<HomeHooks />);
    const noMorePosts = screen.getByText('Post not found');

    expect.assertions(7);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Search...');

    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3 3' })).not.toBeInTheDocument();

    userEvent.type(search, 'title');
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3 3' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Search: title'})).toBeInTheDocument();

    userEvent.clear(search);
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();

    userEvent.type(search, 'post does not exist');
    expect(screen.getByText('Post not found')).toBeInTheDocument();
  });

  it('should load more posts', async () => {
    render(<HomeHooks />);
    const noMorePosts = screen.getByText('Post not found');

    expect.assertions();

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
})
