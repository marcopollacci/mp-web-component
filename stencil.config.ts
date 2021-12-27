import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mp-component',
  srcDir: 'src',
  plugins: [
    sass()
  ],
  outputTargets: [
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
