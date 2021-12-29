import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { IpopulateList } from './mp-select-image-option.model';

@Component({
  tag: 'mp-select-image-option',
  styleUrl: 'mp-select-image-option.scss',
  shadow: true,
})
export class MpSelectImageOption {

  slotInput: HTMLInputElement = null;

  @Element() el: HTMLElement;
  @Prop({ mutable: true }) populateList: IpopulateList[] = [];
  @Prop({ mutable: true, reflect: true }) value: string = '';
  @Prop({ mutable: true }) disabled = false;
  @Prop({ mutable: true }) readonly = false;
  @Prop() defaultIcon?: string = null;
  @State() open = false;
  @State() currentSelected: IpopulateList = null;
  @Event() choosedValue: EventEmitter<string>;

  @Watch('value')
  watchValue() {
    this.populateFirstLi();
  }

  connectedCallback(): void {
    this.slotInput = this.el.querySelector('input') as HTMLInputElement;
    if (!this.slotInput || this.slotInput.getAttribute('type') !== 'hidden') {
      throw new Error(`Please provide input type hidden inside component: <mp-select-image-option><input type='hidden' /></mp-select-image-option>`);
    }
    this.populateFirstLi();
  }

  populateFirstLi(): void {
    if (this.populateList.length && this.value) {
      this.currentSelected = this.populateList.find((singolo) => singolo.value === this.value);
    }
  }

  onChooseValue(singleItem: IpopulateList): void {
    this.value = singleItem.value;
    this.choosedValue.emit(singleItem.value);
    this.currentSelected = singleItem;
    this.slotInput.setAttribute('value', singleItem.value);
  }

  render() {
    if (this.slotInput) {
      return (
        <Host>
          <slot />
          <ul onClick={() => this.open = !this.open} class={{ open: this.open }}>
            <li>
              {this.currentSelected ? this.renderFirstLi() : 'Choose Option...'}
              {(!this.disabled && !this.readonly) &&
                <mp-font-awesome class='selector' stringFontAwesome={`fas fa-angle-${this.open ? 'up' : 'down'}`} />}
            </li>
            {(!this.disabled && !this.readonly) && this.populateList.map((singleItem) =>
              <li onClick={() => this.onChooseValue(singleItem)}>
                {(singleItem.faImage || this.defaultIcon) && <div>
                  <mp-font-awesome stringFontAwesome={singleItem.faImage || this.defaultIcon} />
                </div>}
                <div>{singleItem.description}</div>
              </li>,
            )}
          </ul>
        </Host>
      );
    }
  }

  renderFirstLi(): string[] {
    const returnArray = [
      <div><p>{this.currentSelected.description}</p></div>,
    ];
    if (this.currentSelected.faImage || this.defaultIcon) {
      returnArray.unshift(<div>
        <mp-font-awesome stringFontAwesome={this.currentSelected.faImage || this.defaultIcon} />
      </div>);
    }
    return returnArray;
  }
}

