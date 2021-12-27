import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mp-component',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      dir: 'documentation',
      footer: '*Built with love!*'
    },
    {
      type: 'www',
      copy: [
        {
          src: 'cloudflare', dest: 'build'
        }
      ],
      serviceWorker: null, // disable service workers
    },
  ],
};
