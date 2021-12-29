import readme from './readme.md';

export default {
  title: 'MpSelectImageOption',
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
  /**
   * Notes is an optional string which will be displayed in the "Notes"
   * tab for your component. It is recommended to use the generated readme,
   * however any string should suffice. This supports markdown.
   */
  notes: readme,
};
