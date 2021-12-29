import React from 'react';
import { MpSelectImageOption } from '../../../dist/collection/components/mp-select-image-option/mp-select-image-option';
import readme from './readme.md';

export default {
  title: 'MpSelectImageOption',
  component: MpSelectImageOption,
  parameters: {
    notes: readme,
    actions: {
      handles: ['choosedValue'],
    },
  },
};

const defaultArgs = {
  value: '',
  defaultIcon: 'fas fa-battery-three-quarters',
  populateList: [
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
  ],
};

const Template = args => {
  setTimeout(() => {
    const element = document.getElementById(args.id);
    element.populateList = [
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
  });
  return <mp-select-image-option
    id='mp-select-image-option'
    populate-list={args.populateList}
    value={args.value}
    default-icon={args.defaultIcon}
  ><input type='hidden' /></mp-select-image-option>;
};

const defaultArg = { ...defaultArgs, id: 'mp-select-image-option' };

export const Default = Template.bind({});
Default.args = defaultArg;

const TemplateDisable = args => {
  return <mp-select-image-option disabled={args.disabled}><input type='hidden' /></mp-select-image-option>;
};

export const Disabled = TemplateDisable.bind({});
Disabled.args = { ...defaultArg, disabled: true };
