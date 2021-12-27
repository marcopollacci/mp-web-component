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
      html: `<mp-select-image-option></mp-select-image-option>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-select-image-option>
        <mock:shadow-root>
            <ul>
             <li>
               Choose Option...
               <mp-font-awesome class='selector' stringfontawesome='fas fa-angle-down'></mp-font-awesome>
           </li>
         </ul>
        </mock:shadow-root>
      </mp-select-image-option>
    `);
  });
  it('renders with specific value', async () => {
    const page = await newSpecPage({
      components: [MpSelectImageOption],
      template: () => (<mp-select-image-option
        populateList={populateList}
        selectedValue={'1'}
      />),
    });
    expect(page.root).toEqualHtml(`
      <mp-select-image-option>
        <mock:shadow-root>
            <ul>
             <li>
               <div>
                <mp-font-awesome stringfontawesome='fab fa-amazon'></mp-font-awesome>
              </div>
               <div>
                 ciaone
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
      </mp-select-image-option>
    `);
  });
  describe('testing single function', () => {
    const elMpSelectImageOption = new MpSelectImageOption();
    it('dispatch event on click', async () => {
      const spyEmit = spyOn(elMpSelectImageOption.choosedValue, 'emit');
      elMpSelectImageOption.onChooseValue(populateList[0]);
      expect(spyEmit).toHaveBeenCalled();
    });
    it('dispatch event on click', async () => {
      elMpSelectImageOption.populateList = populateList;
      elMpSelectImageOption.selectedValue = '1';
      expect(elMpSelectImageOption.currentSelected).toEqual(populateList[0]);
    });
  });
});
