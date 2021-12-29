import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mp-font-awesome',
  styleUrl: 'mp-font-awesome.scss',
  shadow: false
})
export class MpFontAwesome {

  @Prop() stringFontAwesome: string;

  render() {
    return (
      <i class={this.stringFontAwesome}/>
     );
  }
}
