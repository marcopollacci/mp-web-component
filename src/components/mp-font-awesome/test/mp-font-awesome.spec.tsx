import { newSpecPage } from '@stencil/core/testing';
import { MpFontAwesome } from '../mp-font-awesome';

describe('mp-font-awesome', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpFontAwesome],
      html: `<mp-font-awesome string-font-awesome='fa'></mp-font-awesome>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-font-awesome string-font-awesome='fa'>
        <i class='fa'></i>
      </mp-font-awesome>
    `);
  });
});
