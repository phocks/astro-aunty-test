import { render } from '@testing-library/svelte'
import SvelteComponentTest from './SvelteComponentTest.svelte';

describe('SvelteComponentTest', () => {
  it('renders a snapshot', () => {
    const { container } = render(SvelteComponentTest);

    expect(container).toMatchSnapshot();
  });
});
