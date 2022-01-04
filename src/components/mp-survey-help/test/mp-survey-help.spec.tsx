import { newSpecPage } from '@stencil/core/testing';
import { MpSurveyHelp } from '../mp-survey-help';

describe('mp-survey-help', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpSurveyHelp],
      html: `<mp-survey-help><slot exit-choose='true' name='question-one' next-question='question-two'>Ciaone?</slot></mp-survey-help>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-survey-help>
       <mock:shadow-root>
         <div>
           Ciaone?
           <div>
             <input id='yes-radio' name='chossed-0' type='radio'>
             <label htmlfor='yes-radio'>
               Yes
             </label>
             <input id='no-radio' name='chossed-0' type='radio'>
             <label htmlfor='no-radio'>
               No
             </label>
           </div>
         </div>
       </mock:shadow-root>
         <slot exit-choose='true' name='question-one' next-question='question-two'>
           Ciaone?
         </slot>
      </mp-survey-help>
    `);
  });
});
