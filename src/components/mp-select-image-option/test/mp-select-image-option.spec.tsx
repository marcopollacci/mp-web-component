import { newSpecPage } from '@stencil/core/testing';
import { MpSelectImageOption } from '../mp-select-image-option';

describe('mp-select-image-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpSelectImageOption],
      html: `<mp-select-image-option></mp-select-image-option>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-select-image-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mp-select-image-option>
    `);
  });
});
