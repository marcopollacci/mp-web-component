import { Component, Element, h, Host } from '@stencil/core';
import { IlistSurvey } from './mp-survey-help.model';

@Component({
  tag: 'mp-survey-help',
  styleUrl: 'mp-survey-help.scss',
  shadow: true,
})
export class MpSurveyHelp {

  @Element() el: HTMLElement;
  listSurvey: IlistSurvey[] = [];
  currentRender: string[] = [];

  connectedCallback(): void {
    const getSlot = this.el.querySelectorAll('slot');
    if (!getSlot.length) {
      throw new Error(`Please provide at least one question!`);
    }

    getSlot.forEach((singleSlot) => {
      this.listSurvey.push({
        name: singleSlot.name, exitChoose: singleSlot.getAttribute('exit-choose'),
        nextQuestion: singleSlot.getAttribute('next-question'), innerHtml: singleSlot.innerHTML,
      });
    });

    console.log('this.listSurvey', this.listSurvey);

  }

  render() {
    return (
      <Host>
        {this.renderQuestion()}
      </Host>
    );
  }

  renderQuestion(index = 0) {
    this.currentRender.push(
      <div>
        {this.listSurvey[index].innerHtml}
        <div>
          <input onClick={() => this.onChoosed(index, true)} name={`chossed-${index}`} id={'yes-radio'}
                 type={'radio'} />
          <label htmlFor={'yes-radio'}>Yes</label>
          <input onClick={() => this.onChoosed(index, false)} name={`chossed-${index}`} id={'no-radio'}
                 type={'radio'} />
          <label htmlFor={'no-radio'}>No</label>
        </div>
      </div>,
    );

    return this.currentRender;
  }

  onChoosed(index: string | number, type: boolean) {
    console.log(this.listSurvey[index]);
    console.log(type);
  }

}
