import { newE2EPage } from '@stencil/core/testing';

describe('mp-text-description', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mp-text-description></mp-text-description>');

    const element = await page.find('mp-text-description');
    expect(element).toHaveClass('hydrated');
  });
});
