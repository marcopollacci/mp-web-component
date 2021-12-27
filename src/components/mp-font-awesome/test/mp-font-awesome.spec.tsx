import { newSpecPage } from '@stencil/core/testing';
import { MpFontAwesome } from '../mp-font-awesome';

describe('mp-font-awesome', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpFontAwesome],
      html: `<mp-font-awesome></mp-font-awesome>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-font-awesome>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mp-font-awesome>
    `);
  });
});
