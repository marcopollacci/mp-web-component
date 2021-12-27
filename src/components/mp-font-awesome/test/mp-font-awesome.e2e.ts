import { newE2EPage } from '@stencil/core/testing';

describe('mp-font-awesome', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mp-font-awesome></mp-font-awesome>');

    const element = await page.find('mp-font-awesome');
    expect(element).toHaveClass('hydrated');
  });
});
