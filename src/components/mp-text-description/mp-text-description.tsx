import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mp-text-description',
  styleUrl: 'mp-text-description.scss',
  shadow: true,
})
export class MpTextDescription {

  @Prop() titleComponent: string;

  render() {
    return (
      <Host>
        {this.titleComponent && <h2>{this.titleComponent}</h2> }
        <slot />
      </Host>
    );
  }

}
