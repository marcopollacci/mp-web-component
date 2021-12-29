import { newSpecPage } from '@stencil/core/testing';
import { MpSelectImageOption } from '../mp-select-image-option';
import { h } from '@stencil/core';
import { IpopulateList } from '../mp-select-image-option.model';

const populateList: IpopulateList[] = [
  {
    value: '1',
    description: 'ciaone',
    faImage: 'fab fa-amazon',
  },
  {
    value: '2',
    description: 'prontone',
  },
  {
    value: '3',
    description: 'gigione',
  },
];

describe('mp-select-image-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpSelectImageOption],
      html: `<mp-select-image-option><input type='hidden' /></mp-select-image-option>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-select-image-option value=''>
        <mock:shadow-root>
          <slot></slot>
            <ul>
             <li>
               Choose Option...
               <mp-font-awesome class='selector' stringfontawesome='fas fa-angle-down'></mp-font-awesome>
           </li>
         </ul>
        </mock:shadow-root>
        <input type='hidden'>
      </mp-select-image-option>
    `);
  });
  it('renders with specific value', async () => {
    const page = await newSpecPage({
      components: [MpSelectImageOption],
      template: () => (<mp-select-image-option
        populateList={populateList}
        value={'1'}
      ><input type='hidden' /></mp-select-image-option>),
    });
    expect(page.root).toEqualHtml(`
      <mp-select-image-option value='1'>
        <mock:shadow-root>
        <slot></slot>
            <ul>
             <li>
               <div>
                <mp-font-awesome stringfontawesome='fab fa-amazon'></mp-font-awesome>
              </div>
               <div>
                 <p>ciaone</p>
               </div>
               <mp-font-awesome class='selector' stringfontawesome='fas fa-angle-down'></mp-font-awesome>
             </li>
            <li>
             <div>
               <mp-font-awesome stringfontawesome='fab fa-amazon'></mp-font-awesome>
             </div>
             <div>
               ciaone
             </div>
           </li>
           <li>
             <div>
               prontone
             </div>
           </li>
           <li>
             <div>
               gigione
             </div>
           </li>
         </ul>
        </mock:shadow-root>
        <input type='hidden'>
      </mp-select-image-option>
    `);
  });
  describe('testing single function', () => {
    const elMpSelectImageOption = new MpSelectImageOption();
    beforeEach(() => {
      spyOn(elMpSelectImageOption, 'connectedCallback').and.stub();
      const htmlInput = new HTMLInputElement();
      elMpSelectImageOption.slotInput = htmlInput;
    });
    it('dispatch event on click', async () => {
      const spyEmit = spyOn(elMpSelectImageOption.choosedValue, 'emit');
      spyOn(elMpSelectImageOption.slotInput, 'setAttribute').and.stub();
      elMpSelectImageOption.onChooseValue(populateList[0]);
      expect(spyEmit).toHaveBeenCalled();
    });
    it('populate list', async () => {
      elMpSelectImageOption.populateList = populateList;
      elMpSelectImageOption.value = '1';
      expect(elMpSelectImageOption.currentSelected).toEqual(populateList[0]);
    });
  });
});
