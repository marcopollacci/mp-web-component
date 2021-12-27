import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { IpopulateList } from './mp-select-image-option.model';

@Component({
  tag: 'mp-select-image-option',
  styleUrl: 'mp-select-image-option.scss',
  shadow: true,
})
export class MpSelectImageOption {

  @Prop({
    mutable: true
  }) populateList: IpopulateList[] = [];
  @Prop({mutable: true}) selectedValue: string = '';
  @Prop() defaultIcon: string = null;

  @State() open = false;
  @State() currentSelected: IpopulateList = null;
  @Event() choosedValue: EventEmitter<string>;

  connectedCallback(): void {
    this.populateFirstLi();
  }

  populateFirstLi(): void {
    if (this.populateList.length && this.selectedValue) {
      this.currentSelected = this.populateList.find((singolo) => singolo.value === this.selectedValue)
    }
  }

  onChooseValue(singleItem: IpopulateList): void {
    this.selectedValue = singleItem.value;
    this.choosedValue.emit(singleItem.value);
    this.currentSelected = singleItem;
  }

  render() {
    return (
      <Host>
         <ul onClick={() => this.open = !this.open} class={{open: this.open}}>
             <li>
               {this.currentSelected ? this.renderFirstLi() : 'Choose Option...'}
               <mp-font-awesome class="selector" stringFontAwesome={`fas fa-angle-${this.open ? 'up' : 'down' }`} />
             </li>
          {this.populateList.map((singleItem) =>
            <li onClick={() => this.onChooseValue(singleItem)}>
              {(singleItem.faImage || this.defaultIcon) && <div><mp-font-awesome stringFontAwesome={singleItem.faImage || this.defaultIcon} /></div>}<div>{singleItem.description}</div>
            </li>
          )}
        </ul>
      </Host>
    );
  }

  renderFirstLi(): string[] {
    const returnArray = [
      <div>{this.currentSelected.description}</div>
    ];
    if (this.currentSelected.faImage || this.defaultIcon) {
        returnArray.unshift(<div><mp-font-awesome stringFontAwesome={this.currentSelected.faImage || this.defaultIcon} /></div>,)
    }
    return returnArray;
  }
}
