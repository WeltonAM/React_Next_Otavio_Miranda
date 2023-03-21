import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputText } from './InputSearch';

describe('<InputText />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<InputText handleChange={fn} searchValue={'testing'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testing');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<InputText handleChange={fn} searchValue="any value" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'value';

    userEvent.type(input, value);

    expect(input.value).toBe('any value');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<InputText handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});