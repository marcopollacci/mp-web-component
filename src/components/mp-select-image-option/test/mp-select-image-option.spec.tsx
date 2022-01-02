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
       <mp-select-image-option aria-controls='listbox' aria-expanded='false' aria-haspopup='listbox' role='combobox' value=''>
        <mock:shadow-root>
          <slot></slot>
            <ul role='listbox'>
             <li role='option'>
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
     <mp-select-image-option aria-controls='listbox' aria-expanded='false' aria-haspopup='listbox' role='combobox' value='1'>
        <mock:shadow-root>
        <slot></slot>
            <ul role='listbox'>
             <li role='option'>
               <div>
                <mp-font-awesome stringfontawesome='fab fa-amazon'></mp-font-awesome>
              </div>
               <div>
                 <p>ciaone</p>
               </div>
               <mp-font-awesome class='selector' stringfontawesome='fas fa-angle-down'></mp-font-awesome>
             </li>
            <li role='option' class='current'>
             <div>
               <mp-font-awesome stringfontawesome='fab fa-amazon'></mp-font-awesome>
             </div>
             <div>
               ciaone
             </div>
           </li>
           <li role='option'>
             <div>
               prontone
             </div>
           </li>
           <li role='option'>
             <div>
               gigione
             </div>
           </li>
         </ul>
        </mock:shadow-root>
        <input type='hidden' value='1'>
      </mp-select-image-option>
    `);
  });
  it('renders with disable value = true', async () => {
    const page = await newSpecPage({
      components: [MpSelectImageOption],
      template: () => (<mp-select-image-option disabled={true}><input type='hidden' /></mp-select-image-option>),
    });
    expect(page.root).toEqualHtml(`
        <mp-select-image-option aria-controls='listbox' aria-expanded='false' aria-haspopup='listbox' role='combobox' value=''>
        <mock:shadow-root>
          <slot></slot>
            <ul role='listbox'>
             <li role='option'>
               Choose Option...
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
    it('keyListener: if one of key, call changeSelect', () => {
      spyOn(elMpSelectImageOption, 'changeSelected');
      elMpSelectImageOption.keyListener({
        key: 'ArrowUp',
      } as unknown as KeyboardEvent);
      expect(elMpSelectImageOption.changeSelected).lastCalledWith('ArrowUp');
    });
    describe('changeSelected', () => {
      beforeEach(() => {
        elMpSelectImageOption.open = true;
      });
      it('if called by Enter, close the div', () => {
        elMpSelectImageOption.changeSelected('Enter');
        expect(elMpSelectImageOption.open).toEqual(false);
      });
      it('if called by ArrowUp and value different from first value of array', () => {
        elMpSelectImageOption.populateList = populateList;
        elMpSelectImageOption.value = '2';
        elMpSelectImageOption.changeSelected('ArrowUp');
        expect(elMpSelectImageOption.value).toEqual('1');
      });
      it('if called by ArrowDown and value different from last value of array', () => {
        elMpSelectImageOption.populateList = populateList;
        elMpSelectImageOption.value = '2';
        elMpSelectImageOption.changeSelected('ArrowDown');
        expect(elMpSelectImageOption.value).toEqual('3');
      });
    });
  });
});
