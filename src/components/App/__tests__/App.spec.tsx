import { screen, render } from '@testing-library/react';

import { App } from '../App';

describe('<App />', () => {
  test('should render', () => {
    const actual = 'test';
    render(<App text={actual} />);

    expect(screen.queryByText(actual)).toBeInTheDocument();
  });
});
