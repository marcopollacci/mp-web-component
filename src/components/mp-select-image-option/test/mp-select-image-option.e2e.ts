import { newE2EPage } from '@stencil/core/testing';

describe('mp-select-image-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mp-select-image-option></mp-select-image-option>');

    const element = await page.find('mp-select-image-option');
    expect(element).toHaveClass('hydrated');
  });
});
