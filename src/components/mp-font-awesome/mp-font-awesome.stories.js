import React from 'react';
import { MpFontAwesome } from '../../../dist/collection/components/mp-font-awesome/mp-font-awesome';
import readme from './readme.md';

export default {
  title: 'MpFontAwesome',
  component: MpFontAwesome,
  parameters: {
    notes: readme,
  },
};

const defaultArgs = {
  stringFontAwesome: 'fas fa-battery-three-quarters',
};

const Template = args => {
  return <mp-font-awesome string-font-awesome={args.stringFontAwesome} />;
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
