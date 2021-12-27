import { newSpecPage } from '@stencil/core/testing';
import { MpTextDescription } from '../mp-text-description';

describe('mp-text-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpTextDescription],
      html: `<mp-text-description></mp-text-description>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-text-description>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mp-text-description>
    `);
  });
  it('renders with title', async () => {
    const page = await newSpecPage({
      components: [MpTextDescription],
      html: `<mp-text-description title-component='Test'></mp-text-description>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-text-description title-component='Test'>
        <mock:shadow-root>
          <h2>Test</h2>
          <slot></slot>
        </mock:shadow-root>
      </mp-text-description>
    `);
  });
});
