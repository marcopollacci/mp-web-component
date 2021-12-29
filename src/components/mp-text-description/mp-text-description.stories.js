import React from 'react';
import { MpTextDescription } from '../../../dist/collection/components/mp-text-description/mp-text-description';
import readme from './readme.md';

export default {
  title: 'MpTextDescription',
  component: MpTextDescription,
  parameters: {
    notes: readme,
  },
};

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat, ipsum quis elementum euismod, augue ante dapibus metus, sit amet efficitur augue diam ut dolor. Donec augue velit, malesuada non quam vitae, pulvinar porta neque. Vestibulum convallis feugiat nibh, tempus ornare tortor ullamcorper pellentesque. Integer ac neque rhoncus felis efficitur aliquam. Etiam orci ante, sollicitudin eget accumsan id, malesuada eget leo. Ut ultricies commodo nulla, pharetra egestas lorem viverra eget. Sed blandit elementum libero, vel maximus purus. Aenean pulvinar ut nibh eget maximus. Nulla finibus, tortor non pretium faucibus, lectus felis fermentum velit, lacinia interdum metus tellus ac magna. Nunc semper auctor tortor, ac hendrerit lacus. Proin facilisis scelerisque quam, in commodo ipsum hendrerit vel. Mauris tincidunt diam lobortis, dapibus massa non, tempor lacus. Integer porttitor justo purus, vel elementum enim sodales eget.

Nullam elementum feugiat libero id ultricies. In auctor rhoncus vehicula. Nunc nisi urna, tempor vel dignissim sed, sollicitudin eu lorem. Donec nec iaculis leo, id laoreet felis. Phasellus in ante nunc. Vestibulum nisl lacus, bibendum id aliquam nec, eleifend a sapien. Praesent pulvinar rhoncus lectus, quis porta purus porta eu. Nunc suscipit nec enim at fermentum. Morbi iaculis facilisis blandit. Donec congue sagittis massa vitae tincidunt. Fusce in nisi id elit molestie pretium a gravida ligula. Integer porttitor tortor nulla, sed fermentum ligula facilisis eu. Donec a commodo lorem, in gravida augue. Nullam viverra suscipit consectetur. Aenean imperdiet ultrices lorem. Nulla id arcu finibus, molestie dolor id, condimentum est.`;

const defaultArgs = {
  titleComponent: 'Test Title',
  body: lorem,
};

const Template = args => {
  return <mp-text-description title-component={args.titleComponent}>{args.body}</mp-text-description>;
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
